import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { IterationSpeedComponent } from './iteration-speed/iteration-speed.component';

import { MatSliderModule } from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    IterationSpeedComponent
  ],
  imports: [
    BrowserModule, MatSliderModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
