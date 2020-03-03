import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromCore from './core';


const routes: Routes = [
  {
    path: '', redirectTo: '/post-editor', pathMatch: 'full'
  },
  {
    path: 'post-editor',
    loadChildren: () => import('./routes/post-editor/post-editor.module').then(m => m.PostEditorModule)
  },
  {
    path: '404',
    component: fromCore.fromComponents.NotFoundComponent
  },
  { path: '**', component: fromCore.fromComponents.NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
