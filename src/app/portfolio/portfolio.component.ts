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
    }, {
      url: '../../assets/img/logic/img2.png',
      title: 'Concepts'
    }, {
      url: '../../assets/img/logic/img3.png',
      title: 'Calculator'
    }, {
      url: '../../assets/img/logic/img5.png',
      title: 'Syntax tree'
    }
  ];

  slidesMusicPlayer: any[] = [
    {
      url: '../../assets/img/calculator/img1.png',
      title: 'Home'
    }
  ];

  slidesPrayersProject: any[] = [
    {
      url: '../../assets/img/prayers/img1.jpg',
      title: 'Home'
    }, {
      url: '../../assets/img/prayers/img2.jpg',
      title: 'Concepts'
    }, {
      url: '../../assets/img/prayers/img3.jpg',
      title: 'Calculator'
    }, {
      url: '../../assets/img/prayers/img4.jpg',
      title: 'Syntax tree'
    }, {
      url: '../../assets/img/prayers/img5.jpg',
      title: 'Home'
    }, {
      url: '../../assets/img/prayers/img6.jpg',
      title: 'Concepts'
    }, {
      url: '../../assets/img/prayers/img7.jpg',
      title: 'Calculator'
    }, {
      url: '../../assets/img/prayers/img8.jpg',
      title: 'Syntax tree'
    }, {
      url: '../../assets/img/prayers/img9.jpg',
      title: 'Syntax tree'
    }, {
      url: '../../assets/img/prayers/img10.jpg',
      title: 'Syntax tree'
    }
  ];

}
