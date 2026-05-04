using api_Rest.Data;
using api_Rest.model;
using api_Rest.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace api_Rest.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController: ControllerBase
    {
        private readonly AppDbContext _context;

 
        public ClienteController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult <List<ClienteModel>> BuscarCliente()
        {
            var Clientes = _context.Clientes.ToList(); 
            return Ok(Clientes);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<ClienteModel> BuscarProdutoPorId(int id)
        {
            var cliente = _context.Clientes.Find(id);

            if (cliente == null)
            {

                return NotFound("Registro não encontrado!");
            }

            return Ok(cliente);
        }

        
        [HttpPost]
        public ActionResult<ClienteModel> CadastrarCliente(ClienteModel clienteModel)
        {
            if (clienteModel == null)
            {
                return BadRequest("Ocorreu um erro na Solicitação!");
            }

            try
            {
                _context.Clientes.Add(clienteModel);
            }
            catch (Exception e)
            {
                return BadRequest($"Ocorreu um erro na criação, erro : {e}");
            }
            _context.SaveChanges();

            return CreatedAtAction(nameof(BuscarProdutoPorId), new { id = clienteModel.id }, clienteModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<ClienteModel> DeletarProduto(int id)
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


