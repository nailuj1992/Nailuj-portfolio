import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getText } from '@model/dto/language';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [],
  templateUrl: 'studies.component.html',
  styleUrl: 'studies.component.css'
})
export class StudiesComponent {

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
