const API_URL = "http://localhost:5262/api/Cliente";
import { BrowserRouter as Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function loginClientes() {   
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState("");
    const [senha, setsenha] = useState("");
    const [erro, setErro] = useState("");
    useEffect(() => {
    
  }, []);

  
        
     // ===== SALVAR CLIENTE =====
    async function validarcliente(e) {
         e.preventDefault();
        setErro("");

      
        try {
        setCarregando(true);

        const response = await fetch(API_URL, {
            method: "get",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({

            })
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar cliente");
        }

        // Limpa formulário
        setNome("");
        setCPF(""); 
        setNascimento("");


      } catch (error) { 
        setErro(error.message);
      }
      
    }
    //RENDER
    return (
    <div >
      <h2>Faça login </h2>

      <form >
        <div>
          <input
            placeholder="Login"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
      
        <div>
            <input
            placeholder="senha"
            value={senha}
            onChange={e => setsenha(e.target.value)}
            />
           
        </div>
            <br />
            <button type="submit" disabled={carregando} >
              {carregando ? "Logando..." : "login"}
            </button>
            <br />

      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>)

    ;    
}
export default loginClientes;