import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from '@components/about/about.component';
import { enUS, esES } from '@model/dto/language';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;

  const render = async (lang: string) => {
    sessionStorage.setItem('lang', lang);
    await TestBed.configureTestingModule({ imports: [AboutComponent] }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  };

  afterEach(() => sessionStorage.clear());

  it('should create', async () => {
    await render(enUS);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the introduction in English', async () => {
    const el = await render(enUS);
    expect(el.querySelector('.title')?.textContent).toContain('About me');
    expect(el.textContent).toContain('passionate developer');
  });

  it('should render the introduction in Spanish', async () => {
    const el = await render(esES);
    expect(el.querySelector('.title')?.textContent).toContain('Acerca de mí');
    expect(el.textContent).toContain('desarrollador apasionado');
  });

  it('should list the tools with an icon and an alt text each', async () => {
    const el = await render(enUS);
    const icons = Array.from(el.querySelectorAll<HTMLImageElement>('img.tech-icon'));
    expect(icons.length).toBeGreaterThan(0);
    for (const icon of icons) {
      expect(icon.getAttribute('alt')).toBeTruthy();
      expect(icon.getAttribute('src')).toMatch(/^assets\/svg\/.+\.svg$/);
    }
  });

  it('should list Lua, used for the World of Warcraft addons', async () => {
    const el = await render(enUS);
    expect(el.querySelector('img[alt="lua"]')?.getAttribute('src')).toBe('assets/svg/lua.svg');
  });
});
