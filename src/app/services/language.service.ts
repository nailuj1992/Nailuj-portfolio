import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getText, enUS, esES } from '@model/dto/language';
import { environment } from '@environments/environment';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject<Document>(DOCUMENT);

  /** Current language code. Falls back to the build default when there is no storage (SSR, blocked storage). */
  private readonly lang = signal<string>(environment.variables.defaultLang);

  constructor() {
    const stored = this.readStoredLang();
    if (stored === enUS || stored === esES) {
      this.lang.set(stored);
    } else {
      this.writeStoredLang(this.lang());
    }

    // Keep <html lang="..."> in sync, also in the prerendered HTML.
    effect(() => {
      this.document.documentElement.lang = this.lang() === esES ? 'es' : 'en';
    });
  }

  getText(id: string): string {
    return getText(id, this.lang());
  }

  isInEnglish(): boolean {
    return this.lang() === enUS;
  }

  isInSpanish(): boolean {
    return this.lang() === esES;
  }

  changeLanguage(): void {
    const next = this.lang() === enUS ? esES : enUS;
    this.lang.set(next);
    this.writeStoredLang(next);
  }

  private readStoredLang(): string | null {
    try {
      return this.document.defaultView?.sessionStorage?.getItem(STORAGE_KEY) ?? null;
    } catch {
      return null;
    }
  }

  private writeStoredLang(lang: string): void {
    try {
      this.document.defaultView?.sessionStorage?.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode, blocked cookies): keep the choice in memory only.
    }
  }

}
