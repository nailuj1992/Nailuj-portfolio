import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { enUS, esES, getText } from '@model/dto/language';
import { environment } from '@environments/environment';

describe('PortfolioComponent', () => {
  let fixture: ComponentFixture<PortfolioComponent>;
  let component: PortfolioComponent;

  const render = async (lang: string) => {
    sessionStorage.setItem('lang', lang);
    await TestBed.configureTestingModule({ imports: [PortfolioComponent] }).compileComponents();
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    component.animationSpeed = 0;
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  };

  afterEach(() => sessionStorage.clear());

  it('should create', async () => {
    await render(enUS);
    expect(component).toBeTruthy();
  });

  it('should render the featured projects with a screenshot slider each', async () => {
    const el = await render(enUS);
    expect(el.querySelector('.title')?.textContent).toContain('My projects');
    expect(el.querySelectorAll('app-image-slider').length).toBe(7);
  });

  it('should translate the section title', async () => {
    const el = await render(esES);
    expect(el.querySelector('.title')?.textContent).toContain('Mis proyectos');
  });

  it('should link every project to its repository', async () => {
    const el = await render(enUS);
    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('a.portfolio-link:not(.curseforge-link)'));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/(github\.com|bitbucket\.org)\//);
    }
  });

  it('should show the first of the other projects and walk through all of them', async () => {
    const el = await render(enUS);
    expect(el.querySelector('.other-projects .title')?.textContent).toContain('Web Portfolio');

    jasmine.clock().install();
    try {
      const total = component.slidesOthers.length;
      for (let i = 0; i < total; i++) {
        component.next();
        jasmine.clock().tick(1);
      }
      expect(component.currentSlide).toBe(0);

      component.previous();
      jasmine.clock().tick(1);
      fixture.detectChanges();
      expect(component.currentSlide).toBe(total - 1);
      expect(el.querySelector('.other-projects .title')?.textContent).toContain('Basic form example');
    } finally {
      jasmine.clock().uninstall();
    }
  });

  it('should only use translation keys that exist in both languages', async () => {
    await render(enUS);
    for (const project of component.slidesOthers) {
      for (const key of [project.title, project.description]) {
        expect(getText(key, enUS)).not.toContain('Missing location', key);
        expect(getText(key, esES)).not.toContain('Missing location', key);
      }
    }
  });

  it('should only reference technology icons and screenshots that exist', async () => {
    await render(enUS);
    const urls = new Set<string>([
      ...component.slidesOthers.flatMap(project => project.technologies.map(key => `assets/svg/${key}.svg`)),
      ...[
        ...component.slidesLogicProject,
        ...component.slidesMusicPlayer,
        ...component.slidesPrayersProject,
        ...component.slidesBasic2dGameProject,
        ...component.slidesFpsLatencyMeter,
        ...component.slidesDeadUi,
        ...component.slidesTacoTipMop,
      ].map(slide => slide.url),
    ]);
    for (const url of urls) {
      const response = await fetch(`/${url}`, { method: 'HEAD' });
      expect(response.ok).withContext(url).toBeTrue();
    }
  });

  it('should list the World of Warcraft addons with the screenshots of their READMEs', async () => {
    const el = await render(enUS);
    expect(el.querySelector('.subsection-title')?.textContent).toContain('World of Warcraft addons');
    expect(el.textContent).toContain('FPS & Latency Meter');
    expect(el.textContent).toContain('Dead UI');
    expect(el.textContent).toContain('TacoTip for Mists of Pandaria');
    expect(component.slidesFpsLatencyMeter.length).toBe(3);
    expect(component.slidesDeadUi.length).toBe(6);
    expect(component.slidesTacoTipMop.length).toBe(9);
  });

  it('should link every addon to its repository and to its CurseForge page', async () => {
    const el = await render(enUS);
    const hrefs = (selector: string) =>
      Array.from(el.querySelectorAll<HTMLAnchorElement>(selector)).map(a => a.getAttribute('href'));

    expect(hrefs('a.curseforge-link')).toEqual([
      environment.curseForgeFpsLatencyMeterUrl,
      environment.curseForgeDeadUiUrl,
      environment.curseForgeTacoTipMopUrl,
    ]);
    expect(hrefs('a.portfolio-link')).toEqual(jasmine.arrayContaining([
      environment.repoFpsLatencyMeterUrl,
      environment.repoDeadUiUrl,
      environment.repoTacoTipMopUrl,
    ]));
  });

  it('should translate the addons section', async () => {
    const el = await render(esES);
    expect(el.querySelector('.subsection-title')?.textContent).toContain('Addons de World of Warcraft');
    expect(el.querySelector('a.curseforge-link')?.textContent).toContain('DESCARGAR EN CURSEFORGE');
  });

  it('should only use translation keys that exist in both languages for the addons', async () => {
    await render(enUS);
    for (const key of [
      'portfolio-wow-addons', 'link-curseforge',
      'title-fps-latency-meter', 'description-fps-latency-meter',
      'title-dead-ui', 'description-dead-ui',
      'title-tacotip-mop', 'description-tacotip-mop',
    ]) {
      expect(getText(key, enUS)).not.toContain('Missing location', key);
      expect(getText(key, esES)).not.toContain('Missing location', key);
    }
  });
});
