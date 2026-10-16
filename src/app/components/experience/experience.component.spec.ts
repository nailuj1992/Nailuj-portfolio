import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from '@components/experience/experience.component';
import { enUS, esES, getText } from '@model/dto/language';

describe('ExperienceComponent', () => {
  let fixture: ComponentFixture<ExperienceComponent>;
  let component: ExperienceComponent;

  const render = async (lang: string) => {
    sessionStorage.setItem('lang', lang);
    await TestBed.configureTestingModule({ imports: [ExperienceComponent] }).compileComponents();
    fixture = TestBed.createComponent(ExperienceComponent);
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

  it('should show the latest job first, in English', async () => {
    const el = await render(enUS);
    expect(el.querySelector('.bold')?.textContent).toContain('Senior Developer');
    expect(el.textContent).toContain('LinkTIC');
    expect(el.textContent).toContain('December 2024 - Present');
  });

  it('should show the job in Spanish', async () => {
    const el = await render(esES);
    expect(el.querySelector('.bold')?.textContent).toContain('Desarrollador Senior');
    expect(el.textContent).toContain('Diciembre 2024 - Presente');
  });

  it('should render one icon per technology of the current job', async () => {
    const el = await render(enUS);
    const icons = el.querySelectorAll('img.tech-icon');
    expect(icons.length).toBe(component.slides[0].technologies.length);
  });

  it('should mark remote jobs', async () => {
    const el = await render(enUS);
    jasmine.clock().install();
    try {
      component.jumpToSlide(1); // Help us Defend (remote)
      jasmine.clock().tick(1);
      fixture.detectChanges();
      expect(el.textContent).toContain('Remote');
    } finally {
      jasmine.clock().uninstall();
    }
  });

  it('should walk through every job and wrap around', async () => {
    await render(enUS);
    jasmine.clock().install();
    try {
      const total = component.slides.length;
      for (let i = 0; i < total; i++) {
        component.next();
        jasmine.clock().tick(1);
      }
      expect(component.currentSlide).toBe(0);

      component.previous();
      jasmine.clock().tick(1);
      expect(component.currentSlide).toBe(total - 1);
    } finally {
      jasmine.clock().uninstall();
    }
  });

  it('should render one indicator per job', async () => {
    const el = await render(enUS);
    expect(el.querySelectorAll('button.indicator').length).toBe(component.slides.length);
  });

  it('should only use translation keys that exist in both languages', async () => {
    await render(enUS);
    for (const slide of component.slides) {
      for (const key of [slide.title, slide.duration]) {
        expect(getText(key, enUS)).not.toContain('Missing location', key);
        expect(getText(key, esES)).not.toContain('Missing location', key);
      }
    }
  });

  it('should only reference technology icons that exist', async () => {
    await render(enUS);
    const keys = new Set(component.slides.flatMap(slide => slide.technologies));
    for (const key of keys) {
      const response = await fetch(`/assets/svg/${key}.svg`, { method: 'HEAD' });
      expect(response.ok).withContext(`assets/svg/${key}.svg`).toBeTrue();
    }
  });
});
