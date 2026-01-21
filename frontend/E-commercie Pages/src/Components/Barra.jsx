import { BrowserRouter as Routes, Link } from "react-router-dom";
import '../App.css';



function Barra() {
  return (
    <>
     
    <nav>
      <h1>Minha Loja</h1>
      <table>
        <th>
         <td><Link to="/">Home</Link></td>
        </th>  
        <th>  
         <td><Link to="/produtos">Produtos</Link></td>
        </th>
      </table>
    </nav>
</>
  );
}
export default Barra;