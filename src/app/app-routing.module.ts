import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationComponent } from './@layout/collaboration.component';

const routes: Routes = [
  {
    path: '',
    component: CollaborationComponent,
    canActivate: [],
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./pages/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'holiday-mngmt',
        loadChildren: () =>
          import('./pages/holiday-mngmt/holiday-mngmt.module').then(
            (m) => m.HolidayMngmtModule
          ),
      },
      // {
      //   path: '',
      //   redirectTo: 'main',
      //   pathMatch: 'full',
      // },
    ],
  },
  // 잘못된 URL을 사용했을때 메인으로 보냄
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
