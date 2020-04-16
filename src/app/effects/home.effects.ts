import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as HomeActions from '../action/home.action';
import { HomeHttpService } from '../service/home.httpservice';
import Home from '../model/home.model';

@Injectable()
export class HomeEffects {
  constructor(private HomeService: HomeHttpService, private action$: Actions) {}

  GetHomes$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HomeActions.BeginGetHomeAction),
      mergeMap(action =>
        this.HomeService.getHomes().pipe(
          map((data: Home[]) => {
            return HomeActions.SuccessGetHomeAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(HomeActions.ErrorHomeAction(error));
          })
        )
      )
    )
  );

  CreateHomes$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HomeActions.BeginCreateHomeAction),
      mergeMap(action =>
        this.HomeService.createHomes(action.payload).pipe(
          map((data: Home) => {
            return HomeActions.SuccessCreateHomeAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(HomeActions.ErrorHomeAction(error));
          })
        )
      )
    )
  );
}
