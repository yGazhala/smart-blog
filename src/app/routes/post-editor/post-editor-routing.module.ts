import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromCore from './../../core/components';

export const postEditorRouting: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'new-post',
        component: fromContainers.PostEditorComponent,
        data: {kind: 'create'}
      },
      {
        path: 'edit-post/:postId',
        component: fromContainers.PostEditorComponent,
        data: {kind: 'edit'}
      },
      { path: '', redirectTo: 'new-post', pathMatch: 'full' },
      { path: '**', component: fromCore.NotFoundComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(postEditorRouting)],
  exports: [RouterModule]
})
export class PostEditorRoutingModule { }
