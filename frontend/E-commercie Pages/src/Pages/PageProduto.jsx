import ListarProdutos from "../Components/ListarProdutos.jsx";
import CadastroProduto from "../Components/CadastroProduto.jsx";
import '../App.css';

function PageProduto() {
  return (
    <main className="centralizar-conteudo">
      <CadastroProduto />
      <ListarProdutos />
    </main>
  );
}

export default PageProduto;