import { createAction, props } from '@ngrx/store';

import { ApiError } from 'src/app/core/models/api-error';
import { Payload } from 'src/app/core/interfaces/payload';

export const logout = createAction('[HomeComponent] Logout');
export const logoutSuccess = createAction('[HomeComponent] Logout Success');
export const logoutFail = createAction('[HomeComponent] Logout Fail', props<Payload<ApiError>>());
