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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
