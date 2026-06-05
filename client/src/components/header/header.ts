import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface navigator{
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
})
export class Header implements OnInit {

  protected navigators: navigator[] = [];

  createNavigator(name: string, icon: string, route: string): navigator {
    return {
      name: name,
      icon: icon,
      route: route,
    };
  }

  ngOnInit() {
    this.navigators = [
      this.createNavigator("Mes compétences", "bolt", "/skills"),
      this.createNavigator("Mes projets", "code", "/projects"),
      this.createNavigator("Mon parcours", "work", "/experiences"),
      this.createNavigator("Contact", "mail", "/contact"),
    ]
  }
}
