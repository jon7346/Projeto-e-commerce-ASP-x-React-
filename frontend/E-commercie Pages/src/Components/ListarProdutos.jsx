import { useEffect, useState } from "react";

// URL da sua API (ajuste a porta se necessário)
const API_URL = "http://localhost:5262/api/Produtos";

function ListarProdutos() {
  // ===== ESTADOS =====
  const [produtos, setProdutos] = useState([]);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [cor, setCor] = useState("");
  const [marca, setMarca] = useState("");
  const [descricao, setDescricao] = useState("");
  

  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  // ===== BUSCAR PRODUTOS AO ABRIR A TELA =====
  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      setCarregando(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }


  // ===== RENDER =====
  return (

  <div>

      <h3>Lista de Produtos</h3>

      {carregando && <p>Carregando...</p>}

      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> 
            — R$ {produto.preco} — {produto.nome} - {produto.cor} - {produto.marca} - {produto.descricao}  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarProdutos;
