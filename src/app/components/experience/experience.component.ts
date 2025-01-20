import { Component, Inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { getText } from '@model/dto/language';
import { environment } from '@environments/environment';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css'
})
export class ExperienceComponent {

  env = environment;

  slides: any[];
  animationSpeed = 300;

  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  constructor(@Inject(DOCUMENT) readonly document: Document) {
    this.slides = [
      {
        title: "experience-8-job",
        duration: "experience-8-duration",
        link: this.env.linkTicLink,
        nameLink: "LinkTIC S.A.S",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["java", "typescript", "html", "css", "angular", "git", "maven", "sql-server", "powerbi"]
      },
      {
        title: "experience-7-job",
        duration: "experience-7-duration",
        link: this.env.helpUsDefendLink,
        nameLink: "Help us Defend",
        place: "Vancouver, BC",
        isRemote: true,
        technologies: ["csharp", "unity", "git"]
      },
      {
        title: "experience-6-job",
        duration: "experience-6-duration",
        link: this.env.globalHitssLink,
        nameLink: "Global Hitss S.A",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["java", "javascript", "html", "css", "git", "maven", "oracle"]
      },
      {
        title: "experience-5-job",
        duration: "experience-5-duration",
        link: this.env.bancoDeBogotaLink,
        nameLink: "Banco de Bogotá",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["java", "typescript", "html", "css", "springboot", "nodejs", "angular", "git", "maven", "mysql", "redis"]
      },
      {
        title: "experience-4-job",
        duration: "experience-4-duration",
        link: this.env.sistemasComercialesLink,
        nameLink: "Sistemas Comerciales SIA Ltda",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["java", "php", "javascript", "html", "css", "yii", "git", "maven", "xampp", "oracle", "mysql"]
      },
      {
        title: "experience-3-job",
        duration: "experience-3-duration",
        link: this.env.dataGlobalLink,
        nameLink: "Data Global S.A.S",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["php", "javascript", "html", "css", "yii", "git", "xampp", "mysql"]
      },
      {
        title: "experience-2-job",
        duration: "experience-2-duration",
        link: this.env.sistemasComercialesLink,
        nameLink: "Sistemas Comerciales SIA Ltda",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["java", "git", "maven", "oracle"]
      },
      {
        title: "experience-1-job",
        duration: "experience-1-duration",
        link: this.env.sistemasComercialesLink,
        nameLink: "Sistemas Comerciales SIA Ltda",
        place: "Bogotá D.C, Colombia",
        isRemote: false,
        technologies: ["php", "javascript", "html", "css", "xampp", "mysql"]
      }
    ];
  }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
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
