import React, { useState, useEffect } from 'react';
import './Item.css';
import Apiinstance from './utils/Apinstance';
import NavBar from './NavBar';

function Getdata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const fetchedData = await Apiinstance({ endpoint: '/items/' });
      setData(fetchedData);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      setError('Erro ao buscar itens.');
    } finally {
      setLoading(false); // Define o estado de carregamento como concluído
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const HandleDelete = async (e) => {
    e.preventDefault(); 
    const itemId = e.target.value;

    console.log(`Clicou no item com ID: ${itemId}`);
    
    try {
      await Apiinstance({ endpoint: `/items/${itemId}/`, method: 'DELETE' });
      console.log(`Item com ID ${itemId} deletado com sucesso`);
      // Atualize a lista local removendo o item excluído
      setData((prevData) => prevData.filter(item => item.id !== parseInt(itemId)));
    } catch (error) {
      console.error('Erro ao deletar o item:', error);
      setError('Erro ao deletar o item.');
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
   
        
      <>
      <NavBar></NavBar>
      <div class="container">
 
</div>
      <div className="title">Items Table</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">
                <button onClick={HandleDelete} className="btn btn-danger" value={item.id}>
                  Delete
                </button>
              </th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{new Date(item.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  );
}

export default Getdata;
