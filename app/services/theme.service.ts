import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';

@Injectable()
export class ThemeService {
    private themesSubject = new BehaviorSubject<Theme[]>([
        { name: 'light-green', display: 'Green - Light' },
        { name: 'dark-green', display: 'Green - Dark' },
        { name: 'light-red', display: 'Red - Light' },
        { name: 'dark-red', display: 'Red - Dark' },
        { name: 'light-blue', display: 'Blue - Light' },
        { name: 'dark-blue', display: 'Blue - Dark' },
        { name: 'light-indigo', display: 'Indigo - Light' },
        { name: 'dark-indigo', display: 'Indigo - Dark' }
    ]);
    private themeSubject = new BehaviorSubject<Theme>(this.themesSubject.value[0]);

    theme$ = this.themeSubject.asObservable();
    themes$ = this.themesSubject.asObservable();

    constructor(
        private overlay: OverlayContainer
    ) {
        this.setOverlayContainerTheme(this.themeSubject.value.name);
    }

    setTheme = (theme: Theme) => {
        this.setOverlayContainerTheme(theme.name, this.themeSubject.value.name);
        this.themeSubject.next(theme);
    }

    setOverlayContainerTheme = (newTheme: string, oldTheme?: string) => {
        if (oldTheme) {
            this.overlay.getContainerElement().classList.remove(oldTheme);
        }
        this.overlay.getContainerElement().classList.add(newTheme);
    }
}
