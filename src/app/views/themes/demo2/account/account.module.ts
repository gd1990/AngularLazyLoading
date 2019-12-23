import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {CustomerComponent} from '../customer.component';
// import {SkeletonLoadingDirective} from 'src/app/skeleton-loading.directive';
import {AccountRoutingModule} from './account-routing.module';
import {SummaryComponent} from './summary/summary.component';
import {AssetsComponent} from './assets/assets.component';
import {AccountsComponent} from './accounts.component';

@NgModule({
  declarations: [
    AccountsComponent,
    SummaryComponent,
    AssetsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
  exports: [],
  entryComponents: []
})
export class AccountModule {
}
