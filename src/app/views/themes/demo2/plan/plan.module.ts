import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {CustomerComponent} from '../customer.component';
// import {SkeletonLoadingDirective} from 'src/app/skeleton-loading.directive';
import {PlanRoutingModule} from './plan-routing.module';
import {SummaryComponent} from './summary/summary.component';
import {AssetsComponent} from './assets/assets.component';
import {PlanComponent} from './plan.component';

@NgModule({
  declarations: [
    PlanComponent,
    SummaryComponent,
    AssetsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanRoutingModule,
  ],
  exports: [],
  entryComponents: []
})
export class PlanModule {
}
