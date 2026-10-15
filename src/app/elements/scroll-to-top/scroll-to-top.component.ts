import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

/** Scroll distance (px) after which the button becomes visible. */
const SHOW_AFTER_PX = 100;

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: 'scroll-to-top.component.html',
  styleUrl: 'scroll-to-top.component.css'
})
export class ScrollToTopComponent {

  windowScrolled: boolean = false;
  faArrowUp = faArrowUp;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.windowScrolled = this.currentScroll() > SHOW_AFTER_PX;
  }

  scrollToTop() {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private currentScroll(): number {
    return this.document.defaultView?.scrollY
      ?? this.document.documentElement.scrollTop
      ?? 0;
  }

}
