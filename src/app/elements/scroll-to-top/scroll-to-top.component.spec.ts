import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollToTopComponent } from '@elements/scroll-to-top/scroll-to-top.component';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToTopComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the button only after scrolling past the threshold', () => {
    const scrollY = spyOnProperty(window, 'scrollY');

    scrollY.and.returnValue(5);
    component.onWindowScroll();
    expect(component.windowScrolled).toBe(false);

    scrollY.and.returnValue(500);
    component.onWindowScroll();
    expect(component.windowScrolled).toBe(true);

    scrollY.and.returnValue(0);
    component.onWindowScroll();
    expect(component.windowScrolled).toBe(false);
  });
});
