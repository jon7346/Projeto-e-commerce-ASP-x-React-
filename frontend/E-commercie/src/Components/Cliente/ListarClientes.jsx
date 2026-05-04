import { useEffect, useState } from "react";

// URL da sua API (ajuste a porta se necessário)
const API_URL = "http://localhost:5262/api/Clientes";

function ListarClientes() {
  // ===== ESTADOS =====
  const [Clientes, setClientes] = useState([]);

  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [nascimento, setNascimento] = useState("");

  

  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  // ===== BUSCAR Clientes AO ABRIR A TELA =====
  useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    try {
      setCarregando(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Erro ao buscar Clientes");
      }

      const data = await response.json();
      setClientes(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }


  // ===== RENDER =====
  return (

  <div style={{ position:"relative", right:"0" }}>

      <h3>Lista de Clientes</h3>

      {carregando && <p>Carregando...</p>}

      <ul >
        {Clientes.map(Clientes => (
          <li key={Clientes.id}>
            <strong>{Clientes.nome}</strong> 
            — R$ {Clientes.preco} — {Clientes.nome} - {Clientes.cor} - {Clientes.marca} - {Clientes.descricao}  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarClientes;
