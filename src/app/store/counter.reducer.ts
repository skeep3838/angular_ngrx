import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

// 此參數可以是任何形式，數字 字串 陣列 物件 
const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    // 創建reducer
    // 第一個參數: 要監聽的action
    // 第二個參數: 當action發生時，將由NgRx執行此函數，將函數自動接收當作的狀態當作輸入
    // 需要做的不是更改目前的狀態，而是返回一個新的值
    // NgRx將會自動儲存該reducer管理數據的新狀態值
    on(increment, (state) => state + 1)
);

// 較新的Angular版本才能直接這樣設定
// export function counterReducer(state = initialState) {
//     return state;
// }