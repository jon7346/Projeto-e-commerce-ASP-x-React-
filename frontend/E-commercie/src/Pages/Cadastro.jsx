
import './pageProduto.css';
import CadastroClientes from '../Components/Cliente/CadastroClientes.jsx';
import ListarClientes from '../Components/Cliente/ListarClientes.jsx';


function Cadastro() {
  return (
    <div className="centralizar-conteudo page" >
      <main className="centralizar-conteudo center formulario">
        <CadastroClientes/>

        <ListarClientes/>
      </main>
    
    </div>
  );
}

export default Cadastro;