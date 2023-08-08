import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationComponent } from './@layout/collaboration.component';

const routes: Routes = [
    {
      path:'',
      component: CollaborationComponent,
      canActivate: [],
      children: [
        {
          path: 'main',
          loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
