import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from '../../elements/image-slider/image-slider.component';
import { InfoSliderComponent } from '../../elements/info-slider/info-slider.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, ImageSliderComponent, InfoSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  env = environment;

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
      title: 'Music player'
    }
  ];

  slidesPrayersProject: any[] = [
    {
      url: '../../assets/img/prayers/img1.jpg',
      title: 'Home'
    }, {
      url: '../../assets/img/prayers/img2.jpg',
      title: 'Special prayers'
    }, {
      url: '../../assets/img/prayers/img3.jpg',
      title: 'Holy Rosary'
    }, {
      url: '../../assets/img/prayers/img4.jpg',
      title: 'Mysteries of the day - Holy Rosary'
    }, {
      url: '../../assets/img/prayers/img5.jpg',
      title: 'Hail Mary - Holy Rosary'
    }, {
      url: '../../assets/img/prayers/img6.jpg',
      title: 'Christmas Novena days'
    }, {
      url: '../../assets/img/prayers/img7.jpg',
      title: 'Consideration for the day - Christmas Novena'
    }, {
      url: '../../assets/img/prayers/img8.jpg',
      title: 'Joys for all days - Christmas Novena'
    }, {
      url: '../../assets/img/prayers/img9.jpg',
      title: 'Simple prayers'
    }, {
      url: '../../assets/img/prayers/img10.jpg',
      title: 'Settings: Language selector (Spanish and English)'
    }
  ];

  slidesBasic2dGameProject: any[] = [
    {
      url: '../../assets/img/basic-2d-game/img1.png',
      title: 'Capture 1'
    }, {
      url: '../../assets/img/basic-2d-game/img2.png',
      title: 'Capture 2'
    }, {
      url: '../../assets/img/basic-2d-game/img3.png',
      title: 'Capture 3'
    }, {
      url: '../../assets/img/basic-2d-game/img4.png',
      title: 'Capture 4'
    }, {
      url: '../../assets/img/basic-2d-game/img5.png',
      title: 'Capture 5'
    }
  ];

  slidesOthers: any[] = [
    {
      title: 'NFC Scan module for Passport chip',
      description: 'This module is done with the idea of implementing the passport scanning with NFC technology on Unity, and for Android devices only.',
      url: null
    }, {
      title: 'Stock Management',
      description: 'This basic project was built on PHP using the framework Yii. This project was focused on manage the stock for a company: inputs, outputs, stock management, and kardex.',
      url: this.env.repoStockManagementUrl
    }, {
      title: 'Portfolio',
      description: 'This project is focused in showing my portfolio in a good and pretty manner. The next link contains the source code for this project -and this entire Web page, of course-.',
      url: this.env.repoPortfolioUrl
    }, {
      title: 'SG-SST',
      description: 'This prototype was developed on PHP using the framework Yii. This project was imagined to provide companies with tools with which they can fully comply with the guidelines and strict controls related to Occupational Health and Safety (SG-SST for its acronym in Spanish).',
      url: this.env.repoSgSstUrl
    }, {
      title: 'Inpec Project',
      description: 'This project was a prototype, focused on manage and control the stock from a store in the prisons owned by the Colombian organization known as Inpec (National Penitentiary and Prison Institute). This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: this.env.repoInpecProjectUrl
    }, {
      title: 'LCD Pin',
      description: 'This desktop app -developed in Java- was focused on register the enrollment data of the students at a school (Liceo Campo David - LCD for its acronym in Spanish), in order to obtain a consecutive number that the parents must present to the school, along with the corresponding payment, thus confirming the student\'s enrollment. This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: this.env.repoLcdPinUrl
    }, {
      title: 'Cuestionario LCD',
      description: 'This Java desktop application was built to store and print questions on the exams for the school Liceo Campo David (LCD for its acronym in Spanish). The exams were made and printed using a powerful tool calles JasperReports. This project was developed for the company \'Sistemas Comerciales SIA Ltda\'.',
      url: this.env.repoCuestionarioLcdUrl
    }, {
      title: 'TuConjunto',
      description: 'This basic project was built on PHP using the framework Yii. This project was focused on help the administrators and related people with some topics related with horizontal properties and residential complexes. This project was developed for the company \'Data Global S.A\'.',
      url: this.env.repoTuConjuntoUrl
    }, {
      title: 'Formulario',
      description: 'It was a little mock-up where a person can be register to a web application.',
      url: this.env.repoFormularioUrl
    }
  ];

}
