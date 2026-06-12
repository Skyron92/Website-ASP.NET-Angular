using server.Models;
using server.Utils;

namespace server.Repositories;

public class ContactRepository
{
    private static Link BuildLink(string name, string url, string icon) {
        return new Link() {
            Name = name,
            Url = url,
            Icon = icon
        };
    }
    public Task<Contact> Get() {
        List<Link> links = [
            BuildLink("Linkedin", "https://www.linkedin.com/in/leo-courtier/", "linkedin"),
            BuildLink("Github", "https://github.com/Skyron92", "github"),
            BuildLink("Email", "mailto:courtier.leo@gmail.com", "mail"),
            BuildLink("CV", $"{Constants.ServerBaseUrl}/api/contact/cv", "download")
        ];

        var contact = new Contact() {
            Links = links
        };
        return Task.FromResult(contact);
    }
}