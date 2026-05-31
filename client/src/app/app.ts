import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from '../services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private endpoint: Api) { }
  protected readonly title = signal('client');

  ngOnInit() {
    this.endpoint.getForecasts().subscribe(data => {
      console.log(data);
    });
  }
}
