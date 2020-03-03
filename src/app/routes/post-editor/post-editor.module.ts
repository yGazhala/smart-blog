import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PostEditorRoutingModule} from './post-editor-routing.module';

import * as fromContainer from './containers';


@NgModule({
  declarations: [fromContainer.components],
  imports: [
    CommonModule,
    PostEditorRoutingModule
  ]
})
export class PostEditorModule { }
