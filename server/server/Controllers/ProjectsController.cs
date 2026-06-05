using server.Models;

namespace server.Controllers;

public class ProjectsController
{
    public Task<Project[]> GetAll()
    {
        Project[] projects = new Project[1];
        return Task.FromResult(projects);
    }
}