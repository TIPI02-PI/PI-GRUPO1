import dotenv from 'dotenv';
import app from './src/app.js'
import pool from './src/config/db.js';
import express from 'express';

import booksRoutes from './src/routes/booksRouters.js';

dotenv.config();


const PORT = process.env.EXPRESS_PORT || 3000;

//static route for API
app.use('/static', express.static('src/public'))

app.use('/api', booksRoutes)

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




