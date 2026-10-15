import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderComponent } from '@elements/image-slider/image-slider.component';

describe('ImageSliderComponent', () => {
  let component: ImageSliderComponent;
  let fixture: ComponentFixture<ImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSliderComponent);
    component = fixture.componentInstance;
  });

  it('should create without slides', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect((fixture.nativeElement as HTMLElement).querySelector('img')).toBeNull();
  });

  it('should render the current slide and wrap around with next/previous', () => {
    component.slides = [
      { url: 'a.png', title: 'A' },
      { url: 'b.png', title: 'B' },
    ];
    component.animationSpeed = 0;
    fixture.detectChanges();

    const img = () => (fixture.nativeElement as HTMLElement).querySelector('img') as HTMLImageElement;
    expect(img().getAttribute('alt')).toBe('A');

    jasmine.clock().install();
    component.next();
    jasmine.clock().tick(1);
    fixture.detectChanges();
    expect(img().getAttribute('alt')).toBe('B');

    component.next();
    jasmine.clock().tick(1);
    expect(component.currentSlide).toBe(0);

    component.previous();
    jasmine.clock().tick(1);
    expect(component.currentSlide).toBe(1);
    jasmine.clock().uninstall();
  });
});
