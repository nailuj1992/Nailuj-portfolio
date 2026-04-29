import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkActive, MatButtonModule],
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.css'
})
export class MenuComponent {

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private langService: LanguageService
  ) { }

  getText(id: string) { return this.langService.getText(id); }
  changeLanguage(): void { this.langService.changeLanguage(); }

  hamburgerMenu(): void {
    const x = this.document.getElementById("menu-items");
    if (!x) return;
    x.style.display = x.style.display === "flex" ? "none" : "flex";
  }

  closeMenuIfMobile(): void {
    const x = this.document.getElementById("menu-items");
    if (x?.style.display === "flex") {
      x.style.display = "none";
    }
  }

}
