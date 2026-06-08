using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Repositories;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase {
    private ContactRepository Repository {get; } =  new();
    
    [HttpGet]
    public async Task<ActionResult<Contact>> GetContact() {
        var contact = await Repository.Get();
        return Ok(contact);
    }
}