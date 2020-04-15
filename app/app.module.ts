import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { MaterialModule } from './material.module';
import { ServicesModule } from './services.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home.component';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports:      [ 
    BrowserModule.withServerTransition({ appId: 'ng-cli-unversal' }),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ServicesModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent,
    HomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
