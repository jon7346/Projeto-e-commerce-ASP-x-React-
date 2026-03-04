import { BrowserRouter as Routes, Link } from "react-router-dom";
import '../App.css';



function Barra() {
  return (
    <>
    <nav style={{display: "flex", justifyContent:"column", alignItems:"center", }}>
      <div style={{marginLeft: "45%"}}>
        <h1>Minha Loja</h1>
      </div>
      <div>
        <span >
          <button className="btn-link">
            <Link to="/">Home</Link>
          </button>
        </span>
        <span>
          <button className="btn-link">
            <Link to="/produtos">Produtos</Link>
          </button>
        </span>
        <span>
          <button className="btn-link">
          <Link to="/carrinho">Carrinho</Link>
          </button>
        </span>
        <span>
          <button className="btn-link">
          <Link to="/login">Login</Link>
          </button>
        </span>
    
      </div>
    </nav>
    </>
  );
}
export default Barra;