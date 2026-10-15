/**
 * Shared slide navigation (next / previous / jump with a fade-out between slides).
 * Components extend it and provide the slide count and the fade duration.
 */
export abstract class SlideNavigation {

  currentSlide = 0;
  hidden = false;

  abstract animationSpeed: number;
  protected abstract get slideCount(): number;

  next(): void {
    this.jumpToSlide((this.currentSlide + 1) % this.slideCount);
  }

  previous(): void {
    this.jumpToSlide((this.currentSlide - 1 + this.slideCount) % this.slideCount);
  }

  jumpToSlide(index: number): void {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

}
