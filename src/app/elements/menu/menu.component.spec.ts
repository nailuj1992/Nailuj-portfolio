import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from '@elements/menu/menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the collapsed menu with the hamburger and close it from a link', () => {
    const items = (fixture.nativeElement as HTMLElement).querySelector('#menu-items') as HTMLElement;
    expect(items.classList).not.toContain('open');

    component.hamburgerMenu();
    fixture.detectChanges();
    expect(items.classList).toContain('open');

    component.closeMenuIfMobile();
    fixture.detectChanges();
    expect(items.classList).not.toContain('open');
  });
});
