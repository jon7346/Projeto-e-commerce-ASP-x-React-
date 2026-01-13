namespace api_Rest.model
{
    public class ProdutoModel
    {
        //isso permite aceitar valores nulos como int 
        public int? id { get; set; }

        public decimal preco { get; set; }

        public string marca { get; set; }
        public string cor { get; set; }
        public string Nome { get; set; }

        // isso define o valor inicial como empty
        public string Descrição { get; set; } = string.Empty; 

    }
}
