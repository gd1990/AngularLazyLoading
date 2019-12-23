import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanComponent} from './plan.component';
import {SummaryComponent} from './summary/summary.component';
import {AssetsComponent} from './assets/assets.component';
// import {CustomerComponent} from './component/customer/customer.component';


const routes: Routes = [{
  path: '',
  component: PlanComponent,
  children: [
    {
      path: 'summary',
      component: SummaryComponent,
      // outlet: 'accountRouterOutlet'
    },
    {
      path: 'assets',
      component: AssetsComponent,
      // outlet: 'accountRouterOutlet'
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule {
}
