using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Repositories;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    private HomeRepository Repository { get; } = new ();

    [HttpGet]
    public async Task<Home> GetHomeAsync() {
        Home home = await Repository.Get();
        return await Task.FromResult(home);
    }
}