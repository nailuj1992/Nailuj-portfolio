import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ScrollToTopComponent } from '@elements/scroll-to-top/scroll-to-top.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule, ScrollToTopComponent],
  templateUrl: 'footer.component.html',
  styleUrl: 'footer.component.css'
})
export class FooterComponent {

  env = environment;

}
