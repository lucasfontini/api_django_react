import React, { useState } from "react";
import Apiinstance from "./utils/Apinstance";
import NavBar from "./NavBar";

function CadastraItem() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null); // Estado para armazenar a resposta

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitBotao = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Faz a requisição usando a função Apiinstance
            const data = await Apiinstance({
                endpoint: "http://localhost:8000/items/",
                method: "POST",
                data: formData,
            });

            // Armazena os dados de resposta
            setResponseData(data);
            console.log("Dados do formulário enviados:", data);
        } catch (err) {
            setError(err);
            console.error("Erro ao cadastrar item:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <NavBar></NavBar>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-60">
                <form onSubmit={submitBotao} className="p-4 border rounded shadow">
                    <h3 className="text-center mb-4">Cadastrar Item</h3>
                    <div className="form-group mb-3">
                        <label>Nome:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Descrição:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary w-100">
                        {loading ? "Enviando..." : "Enviar"}
                    </button>

                    {error && <p className="text-danger mt-3">Erro: {error}</p>}
                </form>

                {/* Exibe os dados retornados após o envio */}
                {responseData ? (
                    <div className="alert alert-primary" role="alert">
                        Cadastrado com sucesso
                    </div>
                ) : (
                    <div className="alert alert-danger" role="alert">
                        ERRO
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default CadastraItem;
