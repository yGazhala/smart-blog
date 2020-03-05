import { createReducer, Action, on } from '@ngrx/store';

import { User } from 'src/types/db';
import * as fromActions from '../actions';
import { ApiError } from 'src/app/core/models';

export interface AuthState {
  pendingLogin: boolean;
  pendingLogout: boolean;
  user?: User;
  loginError?: ApiError;
}

const authReducer = createReducer(
  { pendingLogin: false, pendingLogout: false }, // initial
  on(fromActions.loginEmailPass, () => ({ pendingLogin: true, pendingLogout: false })),
  on(fromActions.loginEmailPassSuccess, (state, action: fromActions.LoginEmailPassSuccess) => {
    return {
      pendingLogin: false,
      pendingLogout: false,
      user: action.payload
    };
  }),
  on(fromActions.loginEmailPassFail, (state, action: fromActions.LoginEmailPassFail) => {
    return {
      pendingLogin: false,
      pendingLogout: false,
      loginError: action.payload
    };
  })
);

export function reducer(state: AuthState, action: Action) { return authReducer(state, action); }
