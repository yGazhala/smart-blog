import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import * as fromComponents from './components';


const modules: any[] = [CommonModule, MaterialModule];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [...modules],
  exports: [...fromComponents.components]
})
export class SharedModule { }
