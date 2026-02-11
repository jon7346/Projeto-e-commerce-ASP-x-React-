import ListarProdutos from "../Components/ListarProdutos.jsx";
import CadastroProduto from "../Components/CadastroProduto.jsx";
import DeleteProduto from "../Components/deleteProduto.jsx";
import '../App.css';


function PageProduto() {
  return (
    <main className="centralizar-conteudo">
      <CadastroProduto />
      <ListarProdutos />
      <DeleteProduto />
    </main>
  );
}

export default PageProduto;