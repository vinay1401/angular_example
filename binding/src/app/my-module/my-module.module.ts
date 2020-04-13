import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyViewComponent } from './my-view/my-view.component';
import { TestServiceService } from '../test-service.service';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [MyViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      MyViewComponent    
  ]
})
export class MyModuleModule { }
