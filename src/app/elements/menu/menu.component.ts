import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';
import { getText, enUS, esES } from '../../model/dto/language';

const logo = '../assets/img/logo.jpg';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  logo = logo;
  env = environment;
  document: Document;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
  }

  getText(id: string) {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return getText(id, sessionStorage.getItem("lang"));
    }
    return null;
  }

  isInEnglish(): boolean {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return sessionStorage.getItem("lang") === enUS;
    }
    return false;
  }

  isInSpanish(): boolean {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return sessionStorage.getItem("lang") === esES;
    }
    return false;
  }

  changeLanguage(): void {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      const lang = sessionStorage.getItem("lang");
      if (lang === null) {
        sessionStorage.setItem('lang', this.env.defaultLang);
        return;
      }
      switch (lang) {
        case enUS:
          sessionStorage.setItem('lang', esES);
          break;
        case esES:
          sessionStorage.setItem('lang', enUS);
          break;
      }
    }
  }

}
