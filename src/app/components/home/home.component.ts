import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutComponent } from '../about/about.component';
import { getText, enUS, esES } from '../../model/dto/language';
import { ExperienceComponent } from '../experience/experience.component';
import { SeparatorComponent } from '../../elements/separator/separator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PortfolioComponent, AboutComponent, ExperienceComponent, SeparatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

}
