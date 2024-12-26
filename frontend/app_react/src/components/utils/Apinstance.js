// Api.js
import axios from 'axios';

// Criação da instância Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Substitua pela sua URL base
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const Apiinstance = async ({ endpoint, method = 'GET', data = null, params = null }) => {
  try {
    const options = { method, url: endpoint, data, params };
    const response = await api(options);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Erro inesperado';
  }
};

export default Apiinstance;
