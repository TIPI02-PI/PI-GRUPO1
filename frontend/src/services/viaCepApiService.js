import axios from 'axios';

const ViaCepApi = axios.create({
    baseURL: 'https://viacep.com.br/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',

    },

});


export const searchCEP = async (cep) => {
    try {
        const cleanCEP = cep.replace(/\D/g, ''); // Remove non-numeric characters

        if (!/^\d{8}$/.test(cleanCEP)) {
            throw new Error('Invalid CEP. It must contain exactly 8 digits.');

        }
 
        // if (cleanCEP.length !== 8) {
        //     throw new Error('Invalid CEP. It must contain exactly 8 digits.');

        // }

        const response = await ViaCepApi.get(`/sws/${cleanCEP}/json/`);

        if (response.data.erro) {
            throw new Error('CEP not found.');

        }

        return response.data;

    } catch (error) {
        // throw error;
        console.error(error);   
        throw new Error('Error when consulting ViaCEP');

    }

};



// console.log(await searchCEP('0491t8040fy'));
// console.log(await searchCEP('0491t80408fy'));
console.log(await searchCEP('05766360'));
console.log(await searchCEP('04918040'));
console.log(await searchCEP('049180400'));


