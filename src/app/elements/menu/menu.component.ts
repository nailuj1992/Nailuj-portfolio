import { Component, signal } from '@angular/core';
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

  /** Whether the collapsed (mobile) menu is open. Ignored by the CSS on wide screens. */
  readonly menuOpen = signal(false);

  constructor(private langService: LanguageService) { }

  getText(id: string) { return this.langService.getText(id); }
  changeLanguage(): void { this.langService.changeLanguage(); }

  hamburgerMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenuIfMobile(): void {
    this.menuOpen.set(false);
  }

}
