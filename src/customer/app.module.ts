import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NbThemeModule } from '@nebular/theme';
import { CustomerspacePagecomponentComponent } from './customerspace/customerspace.pages/customerspace-pagecomponent/customerspace-pagecomponent.component';
import { CustomerspacePageComponent } from './customerspace/customerspace.pages/customerspace-page/customerspace-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NbThemeModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, CustomerspacePagecomponentComponent, CustomerspacePageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
