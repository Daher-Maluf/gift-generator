import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GiftGeneratorComponent } from './gift-generator/gift-generator.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [AppComponent, GiftGeneratorComponent],
  imports: [BrowserModule, ReactiveFormsModule, ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
