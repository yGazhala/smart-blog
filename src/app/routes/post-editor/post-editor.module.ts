import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { JoditAngularModule } from 'jodit-angular';
import { PostEditorRoutingModule } from './post-editor-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';


const modules: any[] = [
  CommonModule,
  PostEditorRoutingModule,
  JoditAngularModule,
  SharedModule
];

@NgModule({
  declarations: [...fromContainers.components, ...fromComponents.components],
  imports: [...modules]
})
export class PostEditorModule { }
