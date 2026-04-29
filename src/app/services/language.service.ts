import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getText, enUS, esES } from '@model/dto/language';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  private get sessionStorage() {
    return this.document.defaultView?.sessionStorage;
  }

  getText(id: string): string | null {
    return getText(id, this.sessionStorage?.getItem('lang') ?? null);
  }

  isInEnglish(): boolean {
    return this.sessionStorage?.getItem('lang') === enUS;
  }

  isInSpanish(): boolean {
    return this.sessionStorage?.getItem('lang') === esES;
  }

  changeLanguage(): void {
    const ss = this.sessionStorage;
    if (!ss) return;
    const lang = ss.getItem('lang');
    if (lang === null) {
      ss.setItem('lang', environment.variables.defaultLang);
      return;
    }
    ss.setItem('lang', lang === enUS ? esES : enUS);
  }

}
