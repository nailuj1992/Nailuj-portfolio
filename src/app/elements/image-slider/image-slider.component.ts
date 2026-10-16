import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SlideNavigation } from '@elements/slide-navigation';
import { ImageSlide } from '@model/dto/slide';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: 'image-slider.component.html',
  styleUrl: 'image-slider.component.css'
})
export class ImageSliderComponent extends SlideNavigation {

  @Input() slides: ImageSlide[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  protected get slideCount(): number { return this.slides.length; }

}
