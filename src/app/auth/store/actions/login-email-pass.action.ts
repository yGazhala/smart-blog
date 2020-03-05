import { createAction, props, Action } from '@ngrx/store';

import { User } from 'src/types/db';
import { Payload } from 'src/app/core/interfaces';
import { ApiError } from 'src/app/core/models';

export interface EmailPassCredentials {
  email: string;
  password: string;
}

export interface LoginEmailPass extends Action, Payload<EmailPassCredentials> {}
export interface LoginEmailPassSuccess extends Action, Payload<User> {}
export interface LoginEmailPassFail extends Action, Payload<ApiError> {}

export const loginEmailPass = createAction(
  '[LoginComponent] Login Email Pass',
  props<Payload<EmailPassCredentials>>()
);
export const loginEmailPassSuccess = createAction(
  '[LoginComponent] Login Email Pass Success',
  props<Payload<User>>()
);
export const loginEmailPassFail = createAction(
  '[LoginComponent] Login Email Pass Fail',
  props<Payload<ApiError>>()
);
