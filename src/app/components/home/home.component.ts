import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBitbucket, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { environment } from '@environments/environment';
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { AboutComponent } from '@components/about/about.component';
import { ExperienceComponent } from '@components/experience/experience.component';
import { StudiesComponent } from '@components/studies/studies.component';
import { ContactComponent } from '@components/contact/contact.component';
import { SeparatorComponent } from '@elements/separator/separator.component';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, PortfolioComponent, AboutComponent, ExperienceComponent, StudiesComponent, ContactComponent, SeparatorComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css'
})
export class HomeComponent {
  private langService = inject(LanguageService);

  env = environment;

  faDownload = faDownload;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faBitbucket = faBitbucket;

  getText(id: string) { return this.langService.getText(id); }
  isInEnglish(): boolean { return this.langService.isInEnglish(); }
  isInSpanish(): boolean { return this.langService.isInSpanish(); }

}
