import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    // [此操作所屬的功能名稱] 必須是唯一的標示符
    '[Counter] Increment',
    // props是一個通用函數，用來描述action可以附加的資料類型
    props<{add: number}>()
);