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
            Presentation = $"Bienvenue sur mon portfolio. Je m'appelle Léo et j'ai {age} ans. Passionné par l'innovation, j'aspire à deux choses : poser les briques de l'avenir et simplifier celles qui sont déjà posées.\n\nCurieux de nature, mon parcours m’a conduit du dessin à la 3D, avant d'arriver à la programmation. D'abord dans le développement de jeux vidéo puis je me suis étendu au développement web.\nAujourd'hui, j'élargi toujours plus mon champs de compétences vers les voies qui m'attirent !",
            ImageUrl = "/images/profile.png"
        };
        return Task.FromResult(home);
    }
}