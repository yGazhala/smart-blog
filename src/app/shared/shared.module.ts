import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import * as fromComponents from './components';


@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, MaterialModule],
  exports: [fromComponents.components]
})
export class SharedModule { }
