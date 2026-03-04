namespace api_Rest.model
{
    public class LojaModel
    {
       public int id { get; set; } 

       public int idEstoque { get; set; }

       public int idPedidos { get; set; }

       public string segmento { get; set; }
        
       public string nome { get; set; }
      
       public string localidade { get; set; }

       public string nota { get; set; } 
    }
}
