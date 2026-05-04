import ListarProdutos from "../Components/Produtos/ListarProdutos.jsx";
import CadastroProduto from "../Components/Produtos/CadastroProduto.jsx";
import DeleteProduto from "../Components/Produtos/deleteProduto.jsx";
import './pageProduto.css';


function PageProduto() {
  return (
    <>
    <div className="centralizar-conteudo page" >
      <main className="centralizar-conteudo center formulario">
        <CadastroProduto />
        <DeleteProduto />
        
      </main>
       
    </div>
    <span className="listarProdutos">
        <ListarProdutos />
    </span>
    </>
  );
}

export default PageProduto;