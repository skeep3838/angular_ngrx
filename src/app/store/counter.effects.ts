import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, reset } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects {
    // 為action執行管道
    // createEffect需要一個函數作為輸入值，函數的回傳值，是我們要注入到此類的東西 
    saveCount = createEffect(() => this.actions$.pipe(
        // 允許我們定義想在這個pipe要繼續的動作，因為actions$是可觀察的，
        // 所以可以透過ofType()過濾分派的action，發出一個新的值
        // 定義這些action發生時該做些什麼？
        // 1. 調度另一個action好觸發reducer，例如發送http request，用reducer更新數據
        // 2. 不調度其他的action
        ofType(increment, decrement, reset),
        // 取得存在store中的新值
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', counter.toString());
        })
    ),
        // 完成後不會分派新的action，預設值為true
        { dispatch: false }
    );

    // Actions是可觀察的，所以可以添加$
    constructor(private actions$: Actions, private store: Store<{counter: number}>) { }
}