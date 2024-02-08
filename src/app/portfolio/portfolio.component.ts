import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { InfoSliderComponent } from '../info-slider/info-slider.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, ImageSliderComponent, InfoSliderComponent],
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

  slidesOthers: any[] = [
    {
      title: 'SG-SST',
      description: 'This prototype was developed on PHP using the framework Yii. This project was imagined to provide companies with tools with which they can fully comply with the guidelines and strict controls related to Occupational Health and Safety (SG-SST for its acronym in Spanish).',
      url: 'https://bitbucket.org/pegasus1992/sg-sst/'
    }, {
      title: 'Inpec Project',
      description: 'This project was a prototype, focused on manage and control the stock from a store in the prisons owned by the Colombian organization known as Inpec (National Penitentiary and Prison Institute). This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: 'https://bitbucket.org/pegasus1992/inpec-project/'
    }, {
      title: 'LCD Pin',
      description: 'This desktop app -developed in Java- was focused on register the enrollment data of the students at a school (Liceo Campo David - LCD for its acronym in Spanish), in order to obtain a consecutive number that the parents must present to the school, along with the corresponding payment, thus confirming the student\'s enrollment. This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: 'https://bitbucket.org/pegasus1992/lcd_pin/'
    }, {
      title: 'Cuestionario LCD',
      description: 'This Java desktop application was built to store and print questions on the exams for the school Liceo Campo David (LCD for its acronym in Spanish). The exams were made and printed using a powerful tool calles JasperReports. This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: 'https://bitbucket.org/pegasus1992/cuestionariolcd/'
    }, {
      title: 'Inventarios',
      description: 'This basic project was built on PHP using the framework Yii. This project was focused on manage the stock for a company. This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: 'https://bitbucket.org/pegasus1992/inventarios/'
    }, {
      title: 'TuConjunto',
      description: 'This basic project was built on PHP using the framework Yii. This project was focused on help the administrators and related people with some topics related with horizontal properties and residential complexes. This project was developed for the company \'Data Global S.A\'.',
      url: 'https://bitbucket.org/pegasus1992/tuconjunto/'
    }, {
      title: 'Formulario',
      description: 'It was a little mock-up where a person can be register to a web application.',
      url: 'https://bitbucket.org/pegasus1992/formulario/'
    }
  ];

}
