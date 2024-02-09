import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSliderComponent } from './info-slider.component';

describe('InfoSliderComponent', () => {
  let component: InfoSliderComponent;
  let fixture: ComponentFixture<InfoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
