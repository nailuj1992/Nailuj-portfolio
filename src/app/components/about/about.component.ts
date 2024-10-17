import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '@environments/environment';
import { getText } from '@model/dto/language';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.css'
})
export class AboutComponent {

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
