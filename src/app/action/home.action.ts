import { createAction, props } from '@ngrx/store';
import Home from '../model/home.model';

export const GetHomeAction = createAction('[Home] - Get Home');

export const CreateHomeAction = createAction(
  '[Home] - Create Home',
  props<Home>()
);

export const BeginGetHomeAction = createAction('[Home] - Begin Get Home');

export const SuccessGetHomeAction = createAction(
  '[Home] - Sucess Get Home',
  props<{ payload: Home[] }>()
);

export const BeginCreateHomeAction = createAction(
  '[Home] - Begin Create Home',
  props<{ payload: Home }>()
);

export const SuccessCreateHomeAction = createAction(
  '[Home] - Sucess Create Home',
  props<{ payload: Home }>()
);

export const ErrorHomeAction = createAction('[Home] - Error', props<Error>());
