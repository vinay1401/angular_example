import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { MyModuleModule } from './my-module/my-module.module';
import { TestServiceService } from './test-service.service';
import { RestExampleComponent } from './rest-example/rest-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    RestExampleComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
