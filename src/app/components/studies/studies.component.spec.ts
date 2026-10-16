import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesComponent } from '@components/studies/studies.component';
import { enUS, esES } from '@model/dto/language';
import { environment } from '@environments/environment';

describe('StudiesComponent', () => {
  let fixture: ComponentFixture<StudiesComponent>;

  const render = async (lang: string) => {
    sessionStorage.setItem('lang', lang);
    await TestBed.configureTestingModule({ imports: [StudiesComponent] }).compileComponents();
    fixture = TestBed.createComponent(StudiesComponent);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  };

  afterEach(() => sessionStorage.clear());

  it('should create', async () => {
    await render(enUS);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should list the three studies in English', async () => {
    const el = await render(enUS);
    expect(el.querySelectorAll('.item-study').length).toBe(3);
    expect(el.textContent).toContain('Systems engineering');
    expect(el.textContent).toContain('Artificial Intelligence');
  });

  it('should list the studies in Spanish', async () => {
    const el = await render(esES);
    expect(el.querySelector('.title')?.textContent).toContain('Mis estudios');
    expect(el.textContent).toContain('Ingeniería de Sistemas');
  });

  it('should link every institution and the WES badge', async () => {
    const el = await render(enUS);
    const hrefs = Array.from(el.querySelectorAll<HTMLAnchorElement>('a')).map(a => a.getAttribute('href'));
    expect(hrefs).toEqual([
      environment.canadianCollegeLink,
      environment.viuLink,
      environment.eciWesLink,
      environment.eciLink,
    ]);
  });
});
