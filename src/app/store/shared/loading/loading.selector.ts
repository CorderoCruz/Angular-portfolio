import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectLoadingPage = createFeatureSelector("pageLoading");

export const selectPageStatus = createSelector(
  selectLoadingPage,
  (state: any) => {
    return state.status;
  }
);
