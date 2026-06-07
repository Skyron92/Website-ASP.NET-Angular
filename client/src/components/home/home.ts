import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Api } from '../../services/api';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { buildResourcesUrl } from '../../utils/utils';

interface HomeData{
  title: string;
  presentation: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, MatProgressSpinner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private api: Api) {}

  home = signal<HomeData | null>(null);

  ngOnInit() {
    this.api.getHome().subscribe((data: HomeData) => {
      this.home.set(data)
    });
  }

  protected readonly buildResourcesUrl = buildResourcesUrl;
}
