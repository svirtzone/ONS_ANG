import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../action/home.action';
import Home from '../model/home.model';
import HomeState, { initializeState } from '../state/home.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(HomeActions.GetHomeAction, state => state),
  on(HomeActions.CreateHomeAction, (state: HomeState, Home: Home) => {
    return { ...state, Homes: [...state.Homes, Home], HomeError: null };
  }),

  on(HomeActions.SuccessGetHomeAction, (state: HomeState, { payload }) => {
    return { ...state, Homes: payload, HomeError: null };
  }),
  on(HomeActions.SuccessCreateHomeAction, (state: HomeState, { payload }) => {
    return { ...state, Homes: [...state.Homes, payload], HomeError: null };
  }),
  on(HomeActions.ErrorHomeAction, (state: HomeState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, HomeError: error };
  })
);

export function HomeReducer(
  state: HomeState | undefined,
  action: Action
): HomeState {
  return reducer(state, action);
}
