namespace server.Models;

public record Contact()
{
    public required List<Link> Links { get; set; }
}

public struct Link()
{
    public required string Name { get; set; }
    public required string Url { get; set; }
    public required string Icon { get; set; }
}