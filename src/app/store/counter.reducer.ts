import { createReducer } from "@ngrx/store";

// 此參數可以是任何形式，數字 字串 陣列 物件 
const initialState = 0;
// export const counterReducer = createReducer(
//     initialState
// );

// 較新的Angular版本才能直接這樣設定
export function counterReducer(state = initialState) {
    return state;
}