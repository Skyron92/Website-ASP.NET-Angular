namespace server.Models;

public record Home()
{
    public required string Title { get; set; }
    public required string Presentation { get; set; }
    public required string ImageUrl { get; set; }
}