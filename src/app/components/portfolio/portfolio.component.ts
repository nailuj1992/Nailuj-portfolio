import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageSliderComponent } from '@elements/image-slider/image-slider.component';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from '@environments/environment';
import { LanguageService } from '@services/language.service';
import { SlideNavigation } from '@elements/slide-navigation';
import { ImageSlide, OtherProject } from '@model/dto/slide';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule, ImageSliderComponent],
  templateUrl: 'portfolio.component.html',
  styleUrl: 'portfolio.component.css'
})
export class PortfolioComponent extends SlideNavigation {
  private langService = inject(LanguageService);

  env = environment;

  slidesLogicProject: ImageSlide[];
  slidesMusicPlayer: ImageSlide[];
  slidesPrayersProject: ImageSlide[];
  slidesBasic2dGameProject: ImageSlide[];
  slidesFpsLatencyMeter: ImageSlide[];
  slidesDeadUi: ImageSlide[];
  slidesTacoTipMop: ImageSlide[];

  slidesOthers: OtherProject[];
  animationSpeed = 300;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  protected get slideCount(): number { return this.slidesOthers.length; }

  constructor() {
    super();
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
        url: 'assets/img/music-player/img1.png',
        title: 'Basic Music Player'
      }, {
        url: 'assets/img/music-player/img2.png',
        title: 'Basic Music Player'
      },
    ];

    this.slidesPrayersProject = [
      {
        url: 'assets/img/prayers/img1.jpeg',
        title: 'Home'
      }, {
        url: 'assets/img/prayers/img2.jpeg',
        title: 'Special prayers'
      }, {
        url: 'assets/img/prayers/img3.jpeg',
        title: 'Mysteries of the day - Holy Rosary'
      }, {
        url: 'assets/img/prayers/img4.jpeg',
        title: 'Hail Mary - Holy Rosary'
      }, {
        url: 'assets/img/prayers/img5.jpeg',
        title: 'Christmas Novena days'
      }, {
        url: 'assets/img/prayers/img6.jpeg',
        title: 'Joys for all days - Christmas Novena'
      }, {
        url: 'assets/img/prayers/img7.jpeg',
        title: 'Simple prayers'
      }, {
        url: 'assets/img/prayers/img8.jpeg',
        title: 'Simple prayers - Magnificat'
      }, {
        url: 'assets/img/prayers/img9.jpeg',
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

    this.slidesFpsLatencyMeter = [
      {
        url: 'assets/img/fps-latency-meter/img1.jpg',
        title: 'FPS and latency indicators'
      },
      {
        url: 'assets/img/fps-latency-meter/img2.jpg',
        title: 'Options: refresh interval, font and colors'
      },
      {
        url: 'assets/img/fps-latency-meter/img3.jpg',
        title: 'Options: indicators and positions'
      }
    ];

    this.slidesDeadUi = [
      {
        url: 'assets/img/dead-ui/img1.png',
        title: 'Death banner in the game'
      },
      {
        url: 'assets/img/dead-ui/img2.png',
        title: 'Options panel'
      },
      {
        url: 'assets/img/dead-ui/img3.png',
        title: 'Options: animation, text and position'
      },
      {
        url: 'assets/img/dead-ui/img4.png',
        title: 'Options: sound picker'
      },
      {
        url: 'assets/img/dead-ui/img5.png',
        title: 'Options: custom sounds'
      },
      {
        url: 'assets/img/dead-ui/img6.png',
        title: 'Slash commands'
      }
    ];

    this.slidesTacoTipMop = [
      {
        url: 'assets/img/tacotip-mop/img1.png',
        title: 'Unit tooltip'
      },
      {
        url: 'assets/img/tacotip-mop/img2.png',
        title: 'Item tooltip'
      },
      {
        url: 'assets/img/tacotip-mop/img3.png',
        title: 'Character frame'
      },
      {
        url: 'assets/img/tacotip-mop/img4.png',
        title: 'Equipped items overlay'
      },
      {
        url: 'assets/img/tacotip-mop/img5.png',
        title: 'Options panel'
      },
      {
        url: 'assets/img/tacotip-mop/img6.png',
        title: 'Options: unit tooltips'
      },
      {
        url: 'assets/img/tacotip-mop/img7.png',
        title: 'Options: character frame'
      },
      {
        url: 'assets/img/tacotip-mop/img8.png',
        title: 'Options: extra'
      },
      {
        url: 'assets/img/tacotip-mop/img9.png',
        title: 'Options: tooltip style'
      }
    ];

    this.slidesOthers = [
      {
        title: "title-portfolio",
        description: "description-portfolio",
        technologies: ["typescript", "javascript", "html", "css", "nodejs", "angular", "git"],
        url: this.env.repoPortfolioUrl
      }, {
        title: "title-stock-management",
        description: "description-stock-management",
        technologies: ["php", "javascript", "html", "css", "yii", "git", "xampp", "mysql"],
        url: this.env.repoStockManagementUrl
      }, {
        title: "title-nfc-scan",
        description: "description-nfc-scan",
        technologies: ["csharp", "unity", "git"],
        url: this.env.repoUnityNfc
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
        technologies: ["java", "git", "mysql"],
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


  getText(id: string) { return this.langService.getText(id); }

}
