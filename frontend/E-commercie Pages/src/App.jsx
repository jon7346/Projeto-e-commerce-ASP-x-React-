
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageProduto from "./Pages/pageProduto.jsx";
import Barra from "./Components/Barra.jsx";
import './App.css';

function App() {
  return (
    <>
       <header className="centralizar-conteudo">  
        <BrowserRouter>
          <Barra />
          <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/produtos" element={<PageProduto />} />
            </Routes>
        </BrowserRouter>
        </header>
    </>
  );
}

export default App;