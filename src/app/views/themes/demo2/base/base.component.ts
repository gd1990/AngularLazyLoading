// Angular
import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'kt-base',
  templateUrl: './base.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  tabClick(event) {
  }

}
