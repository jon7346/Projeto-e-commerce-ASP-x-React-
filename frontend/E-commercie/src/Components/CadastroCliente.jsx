const API_URL = "http://localhost:5262/api/Estoque";
import { useEffect, useState } from "react";

function CadastroCliente() {
        // ===== ESTADOS =====
    const [clientes, setClientes] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [nascimento, setNascimento] = useState("");
    

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
            nome,
            CPF,
            nascimento
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
        carregarProdutos();
        } catch (error) {
        setErro(error.message);
        } finally {
        setCarregando(false);
        }
    }
    //RENDER
    return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Produtos</h2>

      <form onSubmit={salvarCliente}>
        <div>
          <input
            placeholder="Nome do produto"
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
    
        <button type="submit" disabled={carregando}>
          {carregando ? "Salvando..." : "Salvar"}
        </button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>)

    ;    
}
export default CadastroClientes;