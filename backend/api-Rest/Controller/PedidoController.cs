using api_Rest.Data;
using api_Rest.model;
using api_Rest.models;
using Microsoft.AspNetCore.Mvc;

namespace api_Rest.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController: ControllerBase
    {
        private readonly AppDbContext _context;


        public PedidoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<PedidoModel>> BuscarPedidos()
        {
            var Pedidos = _context.Pedido.ToList();
            return Ok(Pedidos);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<PedidoModel> BuscarPorId(int id)
        {
            var Pedidos = _context.Pedido.Find(id);

            if (Pedidos == null)
            {

                return NotFound("Registro não encontrado!");
            }

            return Ok(Pedidos);
        }


        [HttpPost]
        public ActionResult<PedidoModel> CadastrarPedido(PedidoModel pedidoModel)
        {
            if (pedidoModel == null)
            {
                return BadRequest("Ocorreu um erro na Solicitação!");
            }
            _context.Pedido.Add(pedidoModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(BuscarPorId), new { id = pedidoModel.id }, pedidoModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<PedidoModel> DeletarPedido(int id)
        {
            var Pedido = _context.Pedido.Find(id);

            if (Pedido == null)
            {
                return NotFound("Registro não deletado!!");
            }
            else
            {
                _context.Pedido.Remove(Pedido);
                _context.SaveChanges();
            }


            return Ok("Deletado!!");



        }
    }
}
