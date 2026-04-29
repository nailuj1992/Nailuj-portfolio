import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [],
  templateUrl: 'studies.component.html',
  styleUrl: 'studies.component.css'
})
export class StudiesComponent {

  env = environment;

  constructor(private langService: LanguageService) { }

  getText(id: string) { return this.langService.getText(id); }

}
