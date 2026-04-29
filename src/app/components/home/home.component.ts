import { Component } from '@angular/core';
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
  imports: [PortfolioComponent, AboutComponent, ExperienceComponent, StudiesComponent, ContactComponent, SeparatorComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css'
})
export class HomeComponent {

  env = environment;

  constructor(private langService: LanguageService) { }

  getText(id: string) { return this.langService.getText(id); }
  isInEnglish(): boolean { return this.langService.isInEnglish(); }
  isInSpanish(): boolean { return this.langService.isInSpanish(); }

}
