import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDoubleCount, selectCount } from '../store/counter.selector';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  // 如果此屬性最後除了一個observable，則可以在後面加$
  count$: Observable<number>;
  countDouble$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // 從store讀取數據，因為是Observable，所以數據發生變化會自動更新
    // 傳遞一個selector作為值
    this.count$ = store.select(selectCount);
    this.countDouble$ = store.select(selectDoubleCount);
    console.log(store);
  }

}
