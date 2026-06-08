import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { backendUrl } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class SvgMapper {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  private mapSafety(url: string, name: string){
    this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(`${backendUrl}${url}`));
  }

  icons: string[] = ["linkedin", "github",];

  mapAll(){
    this.icons.forEach(icon =>
      this.mapSafety(`/icons/${icon}.svg`, icon)
    );
  }
}
