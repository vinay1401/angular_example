import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
