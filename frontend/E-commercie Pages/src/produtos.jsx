import { useEffect, useState } from "react";

// URL da sua API (ajuste a porta se necessário)
const API_URL = "http://localhost:5262/api/Produtos";

function Produtos() {
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

  // ===== SALVAR PRODUTO =====
  async function salvarProduto(e) {
    e.preventDefault();
    setErro("");

    if (!nome || !preco || !estoque) {
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
          preco: Number(preco),
          estoque: Number(estoque)
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar produto");
      }

      // Limpa formulário
      setNome("");
      setPreco("");
      setEstoque("");
      setCor("");
      setMarca(""); 
      setDescricao("");

      // Atualiza lista
      carregarProdutos();
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  // ===== RENDER =====
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Produtos</h2>

      <form onSubmit={salvarProduto}>
        <div>
          <input
            placeholder="Nome do produto"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />
        </div>

    
        <button type="submit" disabled={carregando}>
          {carregando ? "Salvando..." : "Salvar"}
        </button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <hr />

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

export default Produtos;
