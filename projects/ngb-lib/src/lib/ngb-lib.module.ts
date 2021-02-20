import { NgModule } from '@angular/core';
import { NgbLibComponent } from './ngb-lib.component';
import { BtnCustomComponent } from './btn-custom/btn-custom.component';


const components = [
  NgbLibComponent,
  BtnCustomComponent,
];
@NgModule({
  declarations: [...components],
  imports: [],
  exports: [...components],
})
export class NgbLibModule {}
