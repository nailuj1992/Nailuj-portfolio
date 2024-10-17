import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getText } from '@model/dto/language';

@Component({
  selector: 'app-info-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  templateUrl: 'info-slider.component.html',
  styleUrl: 'info-slider.component.css'
})
export class InfoSliderComponent {

  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;

  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  constructor(@Inject(DOCUMENT) readonly document: Document) { }

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
