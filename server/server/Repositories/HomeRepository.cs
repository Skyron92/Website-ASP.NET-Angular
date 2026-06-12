using server.Models;
using server.Utils;

namespace server.Repositories;

public class HomeRepository
{
    public Task<Home> Get()
    {
        DateTime today = DateTime.Now;
        DateTime birthday = Constants.Birthday;
        
        int age = today.Year - birthday.Year;
        if(today.DayOfYear < birthday.DayOfYear) age--;

        Home home = new Home {
            Title = "Développeur fullstack",
            Presentation = $"Je suis Léo et j'ai {age} ans.",
            ImageUrl = $"{Constants.ServerBaseUrl}/images/profile.png"
        };
        return Task.FromResult(home);
    }
}