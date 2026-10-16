import { Component, signal, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkActive, MatButtonModule, FontAwesomeModule],
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.css'
})
export class MenuComponent {
  faBars = faBars;

  private langService = inject(LanguageService);

  /** Whether the collapsed (mobile) menu is open. Ignored by the CSS on wide screens. */
  readonly menuOpen = signal(false);

  getText(id: string) { return this.langService.getText(id); }
  changeLanguage(): void { this.langService.changeLanguage(); }

  hamburgerMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenuIfMobile(): void {
    this.menuOpen.set(false);
  }

}
