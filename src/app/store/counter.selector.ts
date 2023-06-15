// 大型的功能會有多個組件或Serve訪問共同的數據，這邊則是用來，這邊則是用來定義selector邏輯

import { createSelector } from "@ngrx/store";

// 得到存在store中為更改的counter
export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2
);