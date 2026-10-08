import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

//  Hash password before saving to the database

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

//  Compare a plain text password with the washed one in the database
export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

//  Generate a JWT token for the user to stay logged in
export const generateToken = (userId, role) => {
    return jwt.sign(
        { id: userId, role: role }, process.env.JWT_SECRET, { expiresIn: '1d'} //   Token expires in 1 day
    );

};