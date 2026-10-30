import pool from '../config/db.js'
import { hashPassword, comparePassword, generateToken } from '../services/authService.js';

import { verifyGoogleToken } from '../services/googleService.js';

//  ---- 1 LOCAL REGISTRATION ---
export const register = async (req, res) => {
    try {
        const { first_name, last_name, cpf, birth_date, genre, cep, patio, number, complement, reference, district, city, state, uf, email, password, auth_provider, google_id, photo_url } = req.body;

        //  Check if user already exists (by email or CPF)
        const [ existingUsers ] = await pool.query(
            'SELECT * FROM user_tb WHERE user_email = ? OR user_cpf = ?', [email, cpf]
        );
        if (existingUsers.length > 0 ){
            return res.status(400).json({error: 'Email or CPF already registered.'})
        }

        //  Hash password ONLY if it's a local registration
        let hashedPassword = null;
        if(auth_provider === 'local' && password) {
            hashedPassword = await hashPassword(password);
        }

        //  Insert into database mapping exactly to your schema
        const [result] = await pool.query(
            `INSERT INTO user_tb (
                user_first_name, user_last_name, user_cpf, user_birth_date, user_genre, user_address_cep, user_address_patio, user_address_number, user_address_complement, user_address_reference_point, user_address_district, user_address_city, user_address_state, user_address_federal_unit, user_email, user_password, user_auth_provider, user_google_id, user_photo_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?)`, 
                [
                    first_name, last_name, cpf, birth_date, genre, cep, patio, number, complement || null, reference || null, district, city, state, uf, email, hashedPassword, auth_provider || 'local', google_id || null, photo_url || null

                ]
        );
        const token = generateToken(result.insertId, 'user');
        res.status(201).json({message: 'User created sucessfully', token });

    }   catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

    }
}





// --- 2. LOCAL LOGIN ---
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const [ users ] = await pool.query(
            `SELECT FROM user_tb WHERE user_email = ?`, [email]);
            if (users.length === 0) 
                return res.status(401).json({ error: 'Invalid credentials'});
            const user = users[0];

        // Ensures user actually has a password (they might have registered via Google)
        if (!user.user_password) {
            return res.status(401).json({ error: 'Please log in with Google.' });
        }

        const isMatch = await comparePassword(password, user.user_password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        const token = generateToken(user.user_id, user.user_role);
        res.json({  message: 'Login successful', token, user: { name: user.user_first_name, email: user.user_email}});


    } catch (error) {
        res.status(500).json({  error: 'Internal server error'  });


    }

};

//  --- GOOGLE LOGIN ---
export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;
        
        //  Verify the token with Google
        const googlePayload = await verifyGoogleToken(token);
        const { email, given_name, family_name, sub: google_id, picture } = googlePayload; 

        // Check if user is in our database
        const [users] = await pool.query('SELECT * FROM user_tb WHERE user_email = ?', [email]);
        
        if (users.length > 0 ) {
            //  User exists! Generate token and log them in 
            const user = users[0];

            //  Optional: Update their google_id and photo if it's missing
            if (!user.user_google_id) {
                await pool.query('UPDATE user_tb SET user_google_id = ?, user_photo_url = ? WHERE user_id = ?', [google_id, picture, user.user_id]);
            }

            const jwtToken = generateToken(user.user_id, user.user_role);
            return res.json({ message: 'Google login sucessful', token: jwtToken, user: {   name: user.user_first_name, email: user.user_email  }   });


        
        } else {
            //  User does NOT exist. Tell frontend to send them to registration!
            return res.status(202).json({
                message: 'Needs missing data to complete registration',
                action: 'needs_registration',
                prefillData: { 
                    first_name: given_name,
                    last_name: family_name,
                    email: email,
                    google_id: google_id,
                    photo_url: picture,
                    auth_provider: 'google'

                }
            });
        }

    }catch (error) {
        res.status(401).json({  error: 'Google verification failed' });

    }

};