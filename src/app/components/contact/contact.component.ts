import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '@environments/environment';
import { getText } from '@model/dto/language';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css'
})
export class ContactComponent {

  env = environment;

  constructor(@Inject(DOCUMENT) readonly document: Document) {
  }

  getText(id: string) {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return getText(id, sessionStorage.getItem("lang"));
    }
    return null;
  }

}
