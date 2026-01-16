using api_Rest.model;
using Microsoft.EntityFrameworkCore;


namespace api_Rest.Data
{
    public class AppDbContext: DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        { 
        
        }

        public DbSet<ProdutoModel> Produtos { get; set; }
    }
}
