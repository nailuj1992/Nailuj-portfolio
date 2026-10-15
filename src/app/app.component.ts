import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@/elements/menu/menu.component';
import { FooterComponent } from '@/elements/footer/footer.component';
import { environment } from '@environments/environment';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {

  env = environment;
  title = "Nailuj's portfolio";

  constructor() {
    inject();
    injectSpeedInsights();
  }

}
