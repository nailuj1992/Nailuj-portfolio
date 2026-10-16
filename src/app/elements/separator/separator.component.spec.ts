import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorComponent } from '@elements/separator/separator.component';

describe('SeparatorComponent', () => {
  let fixture: ComponentFixture<SeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SeparatorComponent] }).compileComponents();
    fixture = TestBed.createComponent(SeparatorComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the separator line', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('.section-separator .separator')).not.toBeNull();
  });
});
