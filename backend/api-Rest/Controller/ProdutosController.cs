using api_Rest.Data;
using api_Rest.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_Rest.Controller
{
    //define a primeira roda da api sendo essa o "Localhost/api/Produtos(nome da classe)"
    [Route("api/[controller]")]
    [ApiController]

    //criação da classe do controller de produtos, herdado de ControllerBase
    public class ProdutosController : ControllerBase

    {
        // cria uma Classe/variavel do tipo appDbContex nomeado de _context
        private readonly AppDbContext _context; 

        // estancia o objeto 
        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        //Define como tipo Get, como não foi especificado uma rota ira ficar na rota padrão "Localhost/api/Produtos(nome da classe)"
        [HttpGet]
        public ActionResult <List<ProdutoModel>> BuscarProdutos()
        {
            
            //cria uma variavel chamada produtos que ira receber todos os produtos que retornar de _context usando o metodo ToList()
            var produtos = _context.Produtos.ToList();
            return Ok(produtos);
        }

        //define novamente o tipo porém adiciona um parametro Id ao final da rota ficando "Localhost/api/Produtos(nome da classe)" + "id"
        //[HttpGet]
        //[Route("{id}")]

        public ActionResult<ProdutoModel> BuscarProdutoPorId(int id)
        {
            var Produto = _context.Produtos.Find(id);

            if (Produto == null)
            {

                return NotFound("Registro não encontrado!");
            }

            return Ok(Produto);
        }

        //Define como tipo Post, como não foi especificado uma rota ira ficar na rota padrão "Localhost/api/Produtos(nome da classe)"
        [HttpPost]
        public ActionResult<ProdutoModel> CriarProduto(ProdutoModel produtoModel)
        {
            if (produtoModel == null)
            {
                return BadRequest("Ocorreu um erro na Solicitação!");
            }
            else
            {
                try
                {
                    _context.Produtos.Add(produtoModel);
                }
                catch (Exception e)
                {
                    return BadRequest($"Ocorreu um erro na criação, erro : {e}");
                }
                _context.SaveChanges();
                return CreatedAtAction(nameof(BuscarProdutoPorId), new { id = produtoModel.id }, produtoModel);
            }
        }

        [HttpDelete]
        [Route("{nome}")]
        public ActionResult<ProdutoModel> DeletarProduto(string nome )
        {
            var produto = _context.Produtos.FirstOrDefault(p => p.Nome == nome ); 

            if (produto == null)
            {
                return NotFound("Registro não deletado!!");
            }
            else
            {
                _context.Produtos.Remove(produto);
                _context.SaveChanges();
            }


            return Ok("Deletado!!");



        }

        [HttpGet]
        [Route("{Loja}")]

            public ActionResult<ProdutoModel> BuscarProdutoPorLoja(string Loja)
            {
            var Produtos = _context.Produtos.Where(x => x.Nome.Contains($"{Loja}"));

                if (Produtos == null)
                    {

                        return NotFound("Registro não encontrado!");
                    }
                else
                {

                 var lista = Produtos.ToList();
                    return Ok(lista);
                }

               
            }


    }
}
