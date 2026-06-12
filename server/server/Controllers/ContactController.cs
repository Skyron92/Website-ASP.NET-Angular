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
    
    [HttpGet("cv")]
    public IActionResult DownloadCv() {
        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files", "cv.pdf");
    
        if (!System.IO.File.Exists(filePath))
            return NotFound();

        return PhysicalFile(filePath, "application/pdf", "CV_LeoCourtier.pdf");
    }
}