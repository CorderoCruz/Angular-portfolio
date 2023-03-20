import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
  exhaustMap,
  map,
  take,
  tap,
  delay,
  debounceTime,
} from "rxjs/operators";
import { LoadingActions } from "./loading.actions";

@Injectable()
export class LoadingEffects {
  constructor(private action$: Actions, private store: Store) {}

  loadPageRequest = createEffect(
    () =>
      this.action$.pipe(
        ofType(LoadingActions.loadPageRequest),
        debounceTime(701),
        delay(700),
        tap(() => {
          this.store.dispatch(
            LoadingActions.loadPageFinished({ status: false })
          );
        })
      ),
    { dispatch: false }
  );
}
