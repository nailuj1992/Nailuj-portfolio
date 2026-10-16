import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { enUS, esES, getText } from '@model/dto/language';

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
    expect(el.querySelectorAll('app-image-slider').length).toBe(4);
  });

  it('should translate the section title', async () => {
    const el = await render(esES);
    expect(el.querySelector('.title')?.textContent).toContain('Mis proyectos');
  });

  it('should link every project to its repository', async () => {
    const el = await render(enUS);
    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('a.portfolio-link'));
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
      ].map(slide => slide.url),
    ]);
    for (const url of urls) {
      const response = await fetch(`/${url}`, { method: 'HEAD' });
      expect(response.ok).withContext(url).toBeTrue();
    }
  });
});
