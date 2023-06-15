import { createAction, props } from "@ngrx/store";

export const INCERMENT = '[Counter] Increment';
export const increment = createAction(
    // [此操作所屬的功能名稱] 必須是唯一的標示符
    // Action return的東西的東西，存在這裡的Increment中，一個有return的函數
    INCERMENT,
    // props是一個通用函數，用來描述action可以附加的資料類型
    props<{ add: number }>()
);

// export class IncrementAction implements Action {
//     readonly type = INCERMENT;
//     // 實例化此action時，能獲得此類型的類型屬性物件
//     constructor(public add: number) { }
// }

// // 將多個action組合到一個class中
// export type CounterAction = IncrementAction;