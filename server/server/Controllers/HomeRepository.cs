using server.Models;
using server.Utils;

namespace server.Controllers;

public class HomeRepository
{
    public Task<Home> Get()
    {
        DateTime today = DateTime.Now;
        DateTime birthday = Constants.Birthday;
        
        int age = today.Year - birthday.Year;
        if(today.DayOfYear < birthday.DayOfYear) age--;

        Home home = new Home {
            Title = "Développeur web et 3D temps réel",
            Presentation = $"Bienvenue sur mon portfolio. Je m'appelle Léo et j'ai {age} ans.",
            ImageUrl = "/images/profile.png"
        };
        return Task.FromResult(home);
    }
}