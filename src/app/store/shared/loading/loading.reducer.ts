import { Action, createReducer, on } from "@ngrx/store";
import { LoadingActions } from "./loading.actions";

export interface LoadingPage {
  status: boolean;
}

export const initialState: LoadingPage = {
  status: false,
};

const LoadingReducer = createReducer(
  initialState,
  on(
    LoadingActions.loadPageRequest,
    (state: LoadingPage, { status }): LoadingPage => {
      return {
        ...state,
        status,
      };
    }
  ),
  on(
    LoadingActions.loadPageFinished,
    (state: LoadingPage, { status }): LoadingPage => {
      return {
        ...state,
        status,
      };
    }
  )
);

export const loadingReducer = (state: any, action: any) => {
  return LoadingReducer(state, action);
};
