import dotenv from 'dotenv';
import app from './src/app.js'
import pool from './src/config/db.js';

dotenv.config();


const PORT = process.env.EXPRESS_PORT || 3000;

// Heath check
app.get('/', (req, res) => {

    res.json({
        message: "D'lírios API is running!"

    })

})

app.listen(PORT, async () => {
    console.log(`Server is running in port ${PORT}`);

    try{
        const connection = await pool.getConnection();
        console.log(`Database connected successfully!`);
        connection.release();

    }catch(error){
        console.error(`Database connection failed:`, error.message)
    }

})




