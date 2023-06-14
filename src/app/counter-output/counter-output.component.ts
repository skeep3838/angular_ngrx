import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  // 如果此屬性最後除了一個observable，則可以在後面加$
  count$ : Observable<number>;

  constructor(private counterService: CounterService, 
              private store: Store<{counter: number}>) {
                // 從store讀取數據，因為是Observable，所以數據發生變化會自動更新
                this.count$ = store.select('counter');
              }

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
