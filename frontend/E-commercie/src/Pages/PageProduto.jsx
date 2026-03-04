import ListarProdutos from "../Components/ListarProdutos.jsx";
import CadastroProduto from "../Components/CadastroProduto.jsx";
import DeleteProduto from "../Components/deleteProduto.jsx";
import './pageProduto.css';


function PageProduto() {
  return (
    <div className="centralizar-conteudo page" >
      <main className="centralizar-conteudo center">
        <CadastroProduto />
        <DeleteProduto />
        <ListarProdutos />
        
      </main>
    
    </div>
  );
}

export default PageProduto;