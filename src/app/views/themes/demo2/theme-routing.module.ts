// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BaseComponent} from './base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
      // },
      // {
      //   path: 'ecommerce',
      //   loadChildren: 'app/views/pages/apps/e-commerce/e-commerce.module#ECommerceModule',
      // },
      {
        path: 'account',
        loadChildren: 'app/views/themes/demo2/account/account.module#AccountModule',
      },
      {
        path: 'plan',
        loadChildren: 'app/views/themes/demo2/plan/plan.module#PlanModule',
      },
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {
  constructor() {
    // alert("321");
  }
}
