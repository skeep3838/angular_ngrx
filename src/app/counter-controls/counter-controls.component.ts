import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment } from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // 從Component dispatch action，這樣NgRx就可以幫我們調用這些reducer
    this.store.dispatch(increment());
  }

  decrement() {
    
  }
}
