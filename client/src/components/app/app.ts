import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from '../../services/api';
import { Header } from '../header/header';
import { Home } from '../home/home';

interface Weather {
  TemperatureC: number;
  Summary: string;
  TemperatureF: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private api: Api) {}
  protected readonly title = signal('client');

  ngOnInit() {
    this.api.getForecasts().subscribe((data: Weather) => {
      console.log(data);
    });
  }
}
