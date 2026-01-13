using api_Rest.Data;
using api_Rest.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_Rest.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase

    {
        private readonly AppDbContext _context; 
        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult <List<ProdutoModel>> BuscarProdutos()
        {
            
            var produtos = _context.Produtos.ToList();
            return Ok(produtos);
        }

        [HttpGet]
        [Route("{id}")]

        public ActionResult<ProdutoModel> BuscarProdutoPorId(int id)
        {
            var Produto = _context.Produtos.Find(id);
               
           if(Produto == null) {    
             
                return NotFound("Registro não encontrado!");
            }

            return Ok(Produto);
        }

        [HttpPost]
        public ActionResult<ProdutoModel> CriarProduto(ProdutoModel produtoModel)
        {
            if (produtoModel == null)
            { return BadRequest("Ocorreu um erro na Solicitação!");
            }
            _context.Produtos.Add(produtoModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(BuscarProdutoPorId), new { id = produtoModel.id }, produtoModel);
        }
    }
}
