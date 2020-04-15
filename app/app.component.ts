import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Theme } from './models/theme';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themeClass = 'default';

  constructor(
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.theme$.subscribe((t: Theme) => this.themeClass = t.name);
  }
}
