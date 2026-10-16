import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBitbucket, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { environment } from '@environments/environment';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css'
})
export class ContactComponent {
  private langService = inject(LanguageService);

  env = environment;

  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faBitbucket = faBitbucket;

  getText(id: string) { return this.langService.getText(id); }

}
