import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '@environments/environment';
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { AboutComponent } from '@components/about/about.component';
import { getText, enUS, esES } from '@model/dto/language';
import { ExperienceComponent } from '@components/experience/experience.component';
import { StudiesComponent } from '@components/studies/studies.component';
import { ContactComponent } from '@components/contact/contact.component';
import { SeparatorComponent } from '@elements/separator/separator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PortfolioComponent, AboutComponent, ExperienceComponent, StudiesComponent, ContactComponent, SeparatorComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css'
})
export class HomeComponent {

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

}
