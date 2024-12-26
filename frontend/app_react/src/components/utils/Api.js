import axios from 'axios';

// Criação da instância Axios
const api = axios.create({
  baseURL: 'http://localhost:8000/items/', // Substitua pela sua URL base
  timeout: 5000, // Tempo limite em milissegundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores (opcional)
api.interceptors.request.use(
  (config) => {
    // Adicione lógica para tokens ou autenticação aqui, se necessário
    const token = localStorage.getItem('token'); // Exemplo de token no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Lidando com erros globalmente
    if (error.response) {
      console.error('Erro na resposta:', error.response.data);
    } else if (error.request) {
      console.error('Erro no request:', error.request);
    } else {
      console.error('Erro inesperado:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
