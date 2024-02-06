import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, ImageSliderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  slidesLogicProject: any[] = [
    {
      url: '../../assets/img/logic/img1.png',
      title: 'Home'
    },{
      url: '../../assets/img/logic/img2.png',
      title: 'Concepts'
    },{
      url: '../../assets/img/logic/img3.png',
      title: 'Calculator'
    },{
      url: '../../assets/img/logic/img5.png',
      title: 'Syntax tree'
    }
  ];

}
