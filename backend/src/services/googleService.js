import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,

        });
        //  This payload contains the user's Google info (email, name, picture)
        const payload = ticket.getPayload();
        return payload;

    } catch(error){
        throw new Error(`Invalid Google Token`);
        
    }
};