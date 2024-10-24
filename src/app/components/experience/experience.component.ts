import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getText } from '@model/dto/language';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css'
})
export class ExperienceComponent {

  env = environment;

  constructor(@Inject(DOCUMENT) readonly document: Document) { }

  getText(id: string) {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return getText(id, sessionStorage.getItem("lang"));
    }
    return null;
  }

}
