import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '@environments/environment';
import { getText, enUS, esES } from '@model/dto/language';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkActive, MatButtonModule],
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.css'
})
export class MenuComponent {

  env = environment;

  constructor(@Inject(DOCUMENT) readonly document: Document) { }

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
        sessionStorage.setItem('lang', this.env.variables.defaultLang);
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

  hamburgerMenu(): void {
    let x = this.document.getElementById("menu-items");
    if (!x) {
      return;
    }
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

}
