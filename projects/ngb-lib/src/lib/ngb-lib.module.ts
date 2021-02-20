import { NgModule } from '@angular/core';
import { NgbLibComponent } from './ngb-lib.component';
import { BtnCustomComponent } from './btn-custom/btn-custom.component';



@NgModule({
  declarations: [NgbLibComponent, BtnCustomComponent],
  imports: [
  ],
  exports: [NgbLibComponent]
})
export class NgbLibModule { }
