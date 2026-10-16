import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '@components/home/home.component';
import { LanguageService } from '@services/language.service';
import { enUS, esES } from '@model/dto/language';
import { environment } from '@environments/environment';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  const render = async (lang: string) => {
    sessionStorage.setItem('lang', lang);
    await TestBed.configureTestingModule({ imports: [HomeComponent] }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  };

  afterEach(() => sessionStorage.clear());

  it('should create', async () => {
    await render(enUS);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should compose every section of the page', async () => {
    await render(enUS);
    for (const selector of ['app-about', 'app-portfolio', 'app-experience', 'app-studies', 'app-contact']) {
      expect(el.querySelector(selector)).withContext(selector).not.toBeNull();
    }
    for (const id of ['home', 'about', 'portfolio', 'experience', 'studies', 'contact']) {
      expect(el.querySelector(`#${id}`)).withContext(`#${id}`).not.toBeNull();
    }
  });

  it('should show the name and career in the selected language', async () => {
    await render(esES);
    expect(el.querySelector('#home .title')?.textContent).toContain('Julián González Prieto');
    expect(el.querySelector('#home .subtitle')?.textContent).toContain('Desarrollador Fullstack de Software');
  });

  it('should link the CV that matches the language, and follow a language change', async () => {
    await render(enUS);
    const cv = () => el.querySelector<HTMLAnchorElement>('#home .social-link')?.getAttribute('href');
    expect(cv()).toBe(environment.cvLinkEn);

    TestBed.inject(LanguageService).changeLanguage();
    fixture.detectChanges();
    expect(cv()).toBe(environment.cvLinkSp);
  });

  it('should point the call-to-action buttons to their sections', async () => {
    await render(enUS);
    const hrefs = Array.from(el.querySelectorAll('#home .buttons-cta a')).map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['#portfolio', '#contact']);
  });
});
