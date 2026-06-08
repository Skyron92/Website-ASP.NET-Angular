import { Component, OnInit, signal } from '@angular/core';
import { Api } from '../../services/api/api';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { escapeRegExp } from '@angular/compiler';
import { NgOptimizedImage } from '@angular/common';
import { SvgMapper } from '../../services/svg-mapper/svg-mapper';

interface ContactData {
  links: Link[];
}

interface Link {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  imports: [MatProgressSpinner, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(private api: Api, private svgMapper: SvgMapper) {
    this.svgMapper.mapAll();
  }

  contact = signal<ContactData | null>(null);

  isSvg(icon: string): boolean {
    return this.svgMapper.icons.includes(icon);
  }

  /**
   * Check if the given string is an url pointing toward a file or if it's supposed to be used as icon alias.
   * @param icon The string to check
   * @return True if the given string is an url, false if this string is supposed to be used as icon alias.
   */
  isFileUrl(icon: string): boolean {
    const regexp = new RegExp(/^[\\/](?:[^\\/\s]+[\\/])*[^\\/\s]+\.[a-zA-Z0-9]+$/);
    return regexp.test(icon);
  }

  ngOnInit() {
    this.api.getContact().subscribe((data: ContactData) => {
      this.contact.set(data);
    });
  }
}
