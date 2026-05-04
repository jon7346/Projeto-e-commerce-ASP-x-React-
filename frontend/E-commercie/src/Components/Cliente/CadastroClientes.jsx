const API_URL = "http://localhost:5262/api/Cliente";
import { BrowserRouter as Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function loginClientes() {
        // ===== ESTADOS =====
   
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [clientes, setClientes] = useState([]);
    

    const [erro, setErro] = useState("");
    useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    try {
      setCarregando(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Erro ao Salvar produto");
      }

      const data = await response.json();
      setClientes(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }
        
     // ===== SALVAR CLIENTE =====
    async function salvarCliente(e) {
         e.preventDefault();
        setErro("");

        if (!nome || !CPF || !nascimento) {
        setErro("Preencha todos os campos");
        return;
        }

        try {
        setCarregando(true);

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            nome: nome,
            CPF: CPF,
            nascimento: Date(nascimento)
            })
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar cliente");
        }

        // Limpa formulário
        setNome("");
        setCPF("");
        setNascimento("");


        // Atualiza lista
        carregarClientes();
        } catch (error) {
        setErro(error.message);
        } finally {
        setCarregando(false);
        }
    }
    //RENDER
    return (
    <div style={{ padding: "20px" }}>
      <h2>Faça login </h2>

      <form onSubmit={salvarCliente}>
        <div>
          <input
            placeholder="Login"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div>
            <input
            placeholder="CPF"
            value={CPF}
            onChange={e => setCPF(e.target.value)}
            />
        </div>
        <div>
            <input
            placeholder="Data de nascimento"
            value={nascimento}
            onChange={e => setNascimento(e.target.value)}
            />
           
        </div>
            <br />
            <button type="submit" disabled={carregando} >
              {carregando ? "Logando..." : "login"}
            </button>
            <br />

      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>)

    ;    
}
export default loginClientes;