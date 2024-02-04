import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const logo = '../assets/img/logo.jpg';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nailuj\'s portfolio';
  logo = logo;
}
