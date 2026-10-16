import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from '@elements/footer/footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FooterComponent] }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the author and the current year', () => {
    const text = (fixture.nativeElement as HTMLElement).querySelector('.author')?.textContent ?? '';
    expect(text).toContain(String(new Date().getFullYear()));
    expect(text).toContain('Julián González Prieto');
  });

  it('should include the scroll-to-top button', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('app-scroll-to-top')).not.toBeNull();
  });
});
