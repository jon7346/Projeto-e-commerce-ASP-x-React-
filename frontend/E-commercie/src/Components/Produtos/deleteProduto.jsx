import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:5262/api/Produtos";

function deleteProduto() {
     
        //define a variavel id     
        const [nome, setnome] = useState("");
        //define a variavel carregando 
        const [carregando, setCarregando] = useState(false);

       function deletar (nome) { 
        axios.delete(`${API_URL}/${nome}`)
        .then(response => {
            console.log("Produto deletado com sucesso:", response.data);
        })
        .catch(error => {
            console.error("Erro ao deletar produto:", error);
        });}
        
       return(
        <>
        <form onSubmit={deletar(nome)}> 
         <div>
              <label>nome do Produto para deletar:</label><br/>
              <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} />      
         </div><br/>
         <div> 
            <button type = "submit" > { carregando ? "Deletando..." : "Deletar" } </button>
         </div>
        </form></>
        ) 
}


export default deleteProduto; 