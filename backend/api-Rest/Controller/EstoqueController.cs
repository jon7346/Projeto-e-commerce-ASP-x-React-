using api_Rest.Data;
using api_Rest.model;
using api_Rest.models;
using Microsoft.AspNetCore.Mvc;

namespace api_Rest.Controller
{

    [Route("Api/[Controller]")]
    [ApiController]
    public class EstoqueController: ControllerBase
    {
        private readonly AppDbContext _context;


        public EstoqueController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<EstoqueController>> BuscarEstoque()
        {
            var Estoque = _context.Estoque.ToList();
            return Ok(Estoque);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<EstoqueModel> BuscarProdutoPorId(int id)
        {
            var cliente = _context.Estoque.Find(id);

            if (cliente == null)
            {

                return NotFound("Registro não encontrado!");
            }

            return Ok(cliente);
        }


        [HttpPost]
        public ActionResult<EstoqueModel> CadastrarCliente(EstoqueModel Estoques)
        {
            if (Estoques == null)
            {
                return BadRequest("Ocorreu um erro na Solicitação!");
            }
            _context.Estoque.Add(Estoques);
            _context.SaveChanges();

            return CreatedAtAction(nameof(BuscarProdutoPorId), new { id = Estoques.id }, Estoques);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<EstoqueModel> DeletarProduto(int id)
        {
            var cliente = _context.Clientes.Find(id);

            if (cliente == null)
            {
                return NotFound("Registro não deletado!!");
            }
            else
            {
                _context.Clientes.Remove(cliente);
                _context.SaveChanges();
            }


            return Ok("Deletado!!");



        }
        
    }
}
