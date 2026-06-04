import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from '../../services/api';
import { Header } from '../header/header';

interface Weather {
  TemperatureC: number;
  Summary: string;
  TemperatureF: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
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
