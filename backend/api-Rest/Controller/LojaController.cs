using api_Rest.Data;
using api_Rest.model;

using Microsoft.AspNetCore.Mvc;

namespace api_Rest.Controller
{

    [Route("Api/[Controller]")]
    [ApiController]
    public class LojaController: ControllerBase
    {
        private readonly AppDbContext _context;


        public LojaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<LojaModel>> BuscarLojas()
        {
            var Lojas = _context.Lojas.ToList();
            return Ok(Lojas);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<LojaModel> BuscarProdutoPorId(int id)
        {
            var Loja = _context.Lojas.Find(id);

            if (Loja == null)
            {

                return NotFound("Registro não encontrado!");
            }

            return Ok(Loja);
        }


        [HttpPost]
        public ActionResult<LojaModel> CadastrarLoja(LojaModel lojaModel)
        {
            if (lojaModel == null)
            {
                return BadRequest("Ocorreu um erro na Solicitação!");
            }
            _context.Lojas.Add(lojaModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(BuscarProdutoPorId), new { id = lojaModel.id }, lojaModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<LojaModel> DeletarProduto(int id)
        {
            var Loja = _context.Lojas.Find(id);

            if (Loja == null)
            {
                return NotFound("Registro não deletado!!");
            }
            else
            {
                _context.Lojas.Remove(Loja);
                _context.SaveChanges();
            }


            return Ok("Deletado!!");



        }
    }
}
