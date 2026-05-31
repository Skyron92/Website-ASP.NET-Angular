using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Models;

namespace server.Routes;

public class ProjectsRouter
{
    private static readonly ProjectsController ctrl = new ProjectsController();

    [HttpGet("/api/projects")]
    public async Task<Project[]> GetAllProjects() {
        return await ctrl.GetAll();
    }
}