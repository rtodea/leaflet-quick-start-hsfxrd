import { NgModule } from '@angular/core';

import { SnackerService } from './services/snacker.service';
import { ThemeService } from './services/theme.service';

@NgModule({
    providers: [
        SnackerService,
        ThemeService
    ]
})
export class ServicesModule { }
