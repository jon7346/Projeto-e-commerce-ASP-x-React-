import { BrowserRouter as Routes, Link } from "react-router-dom";
import '../App.css';



function Barra() {
  return (
    <>
     
    <nav>
      <h1>Minha Loja</h1>
      
        <button>
         <Link to="/">Home</Link>
        </button>
        <button>
         <Link to="/produtos">Produtos</Link>
        </button>
      
    </nav>
</>
  );
}
export default Barra;