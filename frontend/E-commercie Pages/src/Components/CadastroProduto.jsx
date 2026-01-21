const API_URL = "http://localhost:5262/api/Produtos";
import { useEffect, useState } from "react";

function CadastroProduto() {
        // ===== ESTADOS =====
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(false);

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [cor, setCor] = useState("");
    const [marca, setMarca] = useState("");
    const [descricao, setDescricao] = useState("");
    

    const [erro, setErro] = useState("");
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

        if (!nome || !preco || !marca || !descricao || !cor 
        ) {
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
            cor,
            marca,
            descricao
            })
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar produto");
        }

        // Limpa formulário
        setNome("");
        setPreco("");
      
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
    //RENDER
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
           <div>
          <input
            placeholder="Cor"
            value={cor}
            onChange={e => setCor(e.target.value)}
          />
        </div>
           <div>
          <input
            placeholder="Marca"
            value={marca}
            onChange={e => setMarca(e.target.value)}
          />
        </div>
           <div>
          <input
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
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
export default CadastroProduto;