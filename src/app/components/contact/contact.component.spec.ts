import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from '@components/contact/contact.component';
import { enUS } from '@model/dto/language';
import { environment } from '@environments/environment';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    sessionStorage.setItem('lang', enUS);
    await TestBed.configureTestingModule({ imports: [ContactComponent] }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  afterEach(() => sessionStorage.clear());

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should link the email address', () => {
    const email = el.querySelector<HTMLAnchorElement>('.contact-email');
    expect(email?.getAttribute('href')).toBe(`mailto:${environment.mailto}`);
    expect(email?.textContent).toContain(environment.mailto);
  });

  it('should link both WhatsApp lines', () => {
    const personal = el.querySelector<HTMLAnchorElement>('.contact-personal-line');
    const corporative = el.querySelector<HTMLAnchorElement>('.contact-corporative-line');
    expect(personal?.getAttribute('href')).toBe(environment.personalLineWhatsappLink);
    expect(personal?.textContent).toContain(environment.personalLine);
    expect(corporative?.getAttribute('href')).toBe(environment.corporativeLineWhatsappLink);
    expect(corporative?.textContent).toContain(environment.corporativeLine);
  });

  it('should link the social profiles in a new tab', () => {
    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('.social-media a'));
    expect(links.map(a => a.getAttribute('href'))).toEqual([
      environment.linkedinUrl,
      environment.githubUrl,
      environment.bitbucketUrl,
    ]);
    expect(links.every(a => a.target === '_blank')).toBeTrue();
  });

  it('should render the icons as SVG with an accessible name', () => {
    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('.social-link'));
    expect(links.length).toBe(3);
    for (const link of links) {
      expect(link.querySelector('svg')).withContext(link.outerHTML).not.toBeNull();
      expect(link.getAttribute('aria-label')).toBeTruthy();
    }
    expect(el.querySelectorAll('.whatsapp-icon svg').length).toBe(2);
  });
});
