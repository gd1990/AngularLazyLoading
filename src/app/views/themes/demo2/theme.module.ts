import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ThemeRoutingModule} from './theme-routing.module';
import {BaseComponent} from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  exports: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // PagesModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule {
  constructor() {
    // alert("321");
  }
}
