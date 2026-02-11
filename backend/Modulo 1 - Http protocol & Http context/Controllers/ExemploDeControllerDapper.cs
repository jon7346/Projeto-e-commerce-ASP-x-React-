using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Data;

namespace SuaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly string _connectionString;

        // Injetamos o IConfiguration para ler a string de conexão do appsettings.json
        public ProdutosController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("String de conexão não encontrada.");
        }

        // Helper para criar a conexão (mantém o código limpo)
        private IDbConnection CreateConnection() => new SqlConnection(_connectionString);

        // GET: api/produtos
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            using var db = CreateConnection();
            const string sql = "SELECT * FROM Produtos";

            var produtos = await db.QueryAsync<Produto>(sql);
            return Ok(produtos);
        }

        // GET: api/produtos/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            using var db = CreateConnection();
            const string sql = "SELECT * FROM Produtos WHERE Id = @Id";

            // O Dapper protege contra SQL Injection automaticamente ao usar o objeto anónimo
            var produto = await db.QueryFirstOrDefaultAsync<Produto>(sql, new { Id = id });

            if (produto == null)
                return NotFound(new { mensagem = "Produto não encontrado." });

            return Ok(produto);
        }
    }

    // Modelo Simples (Garante que os nomes batem com as colunas do Banco de Dados)
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal Preco { get; set; }
    }
}

