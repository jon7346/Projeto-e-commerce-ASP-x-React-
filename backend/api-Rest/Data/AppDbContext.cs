using api_Rest.model;
using api_Rest.models;
using Microsoft.EntityFrameworkCore;


namespace api_Rest.Data
{
    public class AppDbContext: DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        { 
        
        }

        public DbSet<ProdutoModel> Produtos { get; set; }
        public DbSet<ClienteModel> Clientes { get; set; }
        public DbSet<LojaModel> Lojas { get; set; }
    }
}

