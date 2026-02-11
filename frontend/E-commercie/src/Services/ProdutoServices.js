const API_URL = "http://localhost:5262/api/Produtos";

export async function listarProdutos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao listar produtos");
  }

  return response.json();
}

export async function criarProduto(produto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(produto)
  });

  if (!response.ok) {
    throw new Error("Erro ao criar produto");
  }

  return response.json();
}
