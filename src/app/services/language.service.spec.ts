import { TestBed } from '@angular/core/testing';
import { LanguageService } from '@services/language.service';
import { enUS, esES } from '@model/dto/language';
import { environment } from '@environments/environment';

describe('LanguageService', () => {
  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('should start in the default language and persist it', () => {
    const service = TestBed.inject(LanguageService);
    expect(service.isInEnglish()).toBe(environment.variables.defaultLang === enUS);
    expect(sessionStorage.getItem('lang')).toBe(environment.variables.defaultLang);
  });

  it('should use the language stored in the session', () => {
    sessionStorage.setItem('lang', esES);
    const service = TestBed.inject(LanguageService);
    expect(service.isInSpanish()).toBe(true);
    expect(service.getText('home-title')).toBe('Inicio');
  });

  it('should toggle the language, the stored value and the texts', () => {
    sessionStorage.setItem('lang', enUS);
    const service = TestBed.inject(LanguageService);
    expect(service.getText('home-title')).toBe('Home');

    service.changeLanguage();

    expect(service.isInSpanish()).toBe(true);
    expect(sessionStorage.getItem('lang')).toBe(esES);
    expect(service.getText('home-title')).toBe('Inicio');
  });

  it('should ignore an unknown stored language', () => {
    sessionStorage.setItem('lang', 'xxXX');
    const service = TestBed.inject(LanguageService);
    expect(service.getText('home-title')).not.toContain('Unknown language');
  });

  it('should report missing translation keys', () => {
    const service = TestBed.inject(LanguageService);
    expect(service.getText('does-not-exist')).toContain('Missing location');
  });
});
