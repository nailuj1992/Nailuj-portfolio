import { Component, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.css'
})
export class AboutComponent {
  private langService = inject(LanguageService);

  env = environment;

  getText(id: string) { return this.langService.getText(id); }

}
