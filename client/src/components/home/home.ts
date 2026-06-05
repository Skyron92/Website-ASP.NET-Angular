import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly birthday: Date = new Date(2002, 10, 9);

  protected readonly title: string = "Développeur web et 3D temps réel";

  protected readonly presentation: string = `Bienvenue sur mon portfolio. Je m'appelle Léo et j'ai ${this.getAge()} ans.`;

  private getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();
    if(today.getMonth() < this.birthday.getMonth() && today.getDate() < this.birthday.getDate()) age --;
    return age;
  }
}
