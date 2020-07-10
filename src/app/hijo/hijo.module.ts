import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo.component';



@NgModule({
  declarations: [HijoComponent],
  exports:[HijoComponent],
  imports: [
    CommonModule
  ]
})
export class HijoModule { }
