import { Component, Inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageSliderComponent } from '@elements/image-slider/image-slider.component';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from '@environments/environment';
import { getText } from '@model/dto/language';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule, ImageSliderComponent],
  templateUrl: 'portfolio.component.html',
  styleUrl: 'portfolio.component.css'
})
export class PortfolioComponent {

  env = environment;

  slidesLogicProject: any[];
  slidesMusicPlayer: any[];
  slidesPrayersProject: any[];
  slidesBasic2dGameProject: any[];

  slidesOthers: any[];
  animationSpeed = 300;

  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  constructor(@Inject(DOCUMENT) readonly document: Document) {
    this.slidesLogicProject = [
      {
        url: 'assets/img/logic/img1.png',
        title: 'Home'
      }, {
        url: 'assets/img/logic/img2.png',
        title: 'Concepts'
      }, {
        url: 'assets/img/logic/img3.png',
        title: 'Calculator'
      }, {
        url: 'assets/img/logic/img5.png',
        title: 'Syntax tree'
      }
    ];

    this.slidesMusicPlayer = [
      {
        url: 'assets/img/calculator/img1.png',
        title: 'Music player'
      }
    ];

    this.slidesPrayersProject = [
      {
        url: 'assets/img/prayers/img1.jpg',
        title: 'Home'
      }, {
        url: 'assets/img/prayers/img2.jpg',
        title: 'Special prayers'
      }, {
        url: 'assets/img/prayers/img3.jpg',
        title: 'Holy Rosary'
      }, {
        url: 'assets/img/prayers/img4.jpg',
        title: 'Mysteries of the day - Holy Rosary'
      }, {
        url: 'assets/img/prayers/img5.jpg',
        title: 'Hail Mary - Holy Rosary'
      }, {
        url: 'assets/img/prayers/img6.jpg',
        title: 'Christmas Novena days'
      }, {
        url: 'assets/img/prayers/img7.jpg',
        title: 'Consideration for the day - Christmas Novena'
      }, {
        url: 'assets/img/prayers/img8.jpg',
        title: 'Joys for all days - Christmas Novena'
      }, {
        url: 'assets/img/prayers/img9.jpg',
        title: 'Simple prayers'
      }, {
        url: 'assets/img/prayers/img10.jpg',
        title: 'Settings: Language selector (Spanish and English)'
      }
    ];

    this.slidesBasic2dGameProject = [
      {
        url: 'assets/img/basic-2d-game/img1.png',
        title: 'Capture 1'
      }, {
        url: 'assets/img/basic-2d-game/img2.png',
        title: 'Capture 2'
      }, {
        url: 'assets/img/basic-2d-game/img3.png',
        title: 'Capture 3'
      }, {
        url: 'assets/img/basic-2d-game/img4.png',
        title: 'Capture 4'
      }, {
        url: 'assets/img/basic-2d-game/img5.png',
        title: 'Capture 5'
      }
    ];

    this.slidesOthers = [
      {
        title: "title-nfc-scan",
        description: "description-nfc-scan",
        technologies: ["csharp", "unity", "git"],
        url: null
      }, {
        title: "title-stock-management",
        description: "description-stock-management",
        technologies: ["php", "javascript", "html", "css", "yii", "git", "xampp", "mysql"],
        url: this.env.repoStockManagementUrl
      }, {
        title: "title-portfolio",
        description: "description-portfolio",
        technologies: ["typescript", "javascript", "html", "css", "nodejs", "angular", "git"],
        url: this.env.repoPortfolioUrl
      }, {
        title: "title-sgsst",
        description: "description-sgsst",
        technologies: ["php", "javascript", "html", "css", "yii", "git", "xampp", "mysql"],
        url: this.env.repoSgSstUrl
      }, {
        title: "title-inpec",
        description: "description-inpec",
        technologies: ["php", "javascript", "html", "css", "git", "xampp", "mysql"],
        url: this.env.repoInpecProjectUrl
      }, {
        title: "title-lcd-pin",
        description: "description-lcd-pin",
        technologies: ["php", "javascript", "html", "css", "git", "xampp", "mysql"],
        url: this.env.repoLcdPinUrl
      }, {
        title: "title-lcd-questions",
        description: "description-lcd-questions",
        technologies: ["java", "git", "mysql"],
        url: this.env.repoCuestionarioLcdUrl
      }, {
        title: "title-tu-conjunto",
        description: "description-tu-conjunto",
        technologies: ["php", "javascript", "html", "css", "yii", "git", "xampp", "mysql"],
        url: this.env.repoTuConjuntoUrl
      }, {
        title: "title-form",
        description: "description-form",
        technologies: ["php", "javascript", "html", "css", "git", "xampp", "mysql"],
        url: this.env.repoFormularioUrl
      }
    ];
  }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slidesOthers.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide = (this.currentSlide - 1 + this.slidesOthers.length) % this.slidesOthers.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  getText(id: string) {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    if (sessionStorage) {
      return getText(id, sessionStorage.getItem("lang"));
    }
    return null;
  }

}
