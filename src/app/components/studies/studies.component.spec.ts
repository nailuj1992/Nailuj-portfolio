import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesComponent } from '@components/studies/studies.component';

describe('StudiesComponent', () => {
  let component: StudiesComponent;
  let fixture: ComponentFixture<StudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
