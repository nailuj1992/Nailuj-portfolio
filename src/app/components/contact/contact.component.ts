import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css'
})
export class ContactComponent {

  env = environment;

  constructor(private langService: LanguageService) { }

  getText(id: string) { return this.langService.getText(id); }

}
