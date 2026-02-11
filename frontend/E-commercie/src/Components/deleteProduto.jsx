import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:5262/api/Produtos";

function deleteProduto() {

        const [id, setId] = useState("");
        const [carregando, setCarregando] = useState(false);

       function deletar (id) { axios.delete(`${API_URL}/${id}`)
        .then(response => {
            console.log("Produto deletado com sucesso:", response.data);
        })
        .catch(error => {
            console.error("Erro ao deletar produto:", error);
        });}
        
       return(
        <>
        <form>
         <div>
              <label>ID do Produto para deletar:</label><br/>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} />      
         </div><br/>
         <div> 
            <button type = "submit" onClick={() => deletar(id)}> { carregando ? "Deletando..." : "Deletar" } </button>
         </div>
        </form></>
        ) 
}


export default deleteProduto; 