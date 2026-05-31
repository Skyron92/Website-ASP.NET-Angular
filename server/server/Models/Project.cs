namespace server.Models;

public record Project()
{
    public required string Name { get; set; }
    public required string Description { get; set; }
    public required string MediaUrl { get; set; }
    public required string[] IconsUrl { get; set; }

    public Project(string Name, string Description, string MediaUrl, string[] IconsUrl) : this()
    {
        this.Name = Name;
        this.Description = Description;
        this.MediaUrl = MediaUrl;
        this.IconsUrl = IconsUrl;
    }
}