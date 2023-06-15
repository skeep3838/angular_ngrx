import { createAction } from "@ngrx/store";

export const increment = createAction(
    // [此操作所屬的功能名稱] 必須是唯一的標示符
    '[Counter] Increment '
);