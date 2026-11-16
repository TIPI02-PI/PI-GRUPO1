import axios from 'axios';

const dliriosApi = axios.create({
    baseURL: 'http://localhost:3000/api', //Matches ours Express backend port!
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',

    },
    
});

export default dliriosApi;