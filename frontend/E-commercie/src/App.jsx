
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageProduto from "./Pages/pageProduto.jsx";
import Barra from "./Components/Barra.jsx";
import './App.css';
import Home from "./Pages/home.jsx";

function App() {
  return (
    <>
       <header >  
        <BrowserRouter>
          <Barra/>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/produtos" element={<PageProduto />} />
                  <><Route path="/carrinho" element={<h1 style>Em construção</h1>} /></>
                  <><Route path="/login" element={<h1 style={{ textAlign: "center" }}>Em construção</h1>} /></>
            </Routes>
        </BrowserRouter>
       </header>
         
        
        <hr />
        <footer className="centralizar-conteudo">
          <p>© 2026 - Todos os direitos reservados</p>
        </footer>
  
    </>
  );
}

export default App;