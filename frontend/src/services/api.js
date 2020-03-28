// Importações

import axios from 'axios';

// Criando api
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

// Exportando api
export default api;