namespace api_Rest.models
{
    public class ClienteModel
    {
        public int id { get; set; }

        public string nome { get; set; }

        public string CPF { get; set; }

        public DateOnly nascimento { get; set; }

    }
}
