import { createActionGroup, props } from "@ngrx/store";

export const LoadingActions = createActionGroup({
  source: "[Page Loading] loading...",
  events: {
    "Load Page Request": props<{ status: boolean }>(),
    "Load Page Finished": props<{ status: boolean }>(),
  },
});
