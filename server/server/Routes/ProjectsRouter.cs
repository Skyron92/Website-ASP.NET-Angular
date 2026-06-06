using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Models;

namespace server.Routes;

public class ProjectsRouter
{
    private ProjectsController Controller { get; } = new();

    [HttpGet("/api/projects")]
    public async Task<Project[]> GetAllProjects() {
        return await Controller.GetAll();
    }
}