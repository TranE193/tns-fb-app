import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LoadAuths = '[Auth] Load Auths', LoadAuthsSuccess = '[Auth] Load Auths Success', LoadAuthsFailure = '[Auth] Load Auths Failure',
}

export class LoadAuths implements Action {
    readonly type = AuthActionTypes.LoadAuths;
}

export class LoadAuthsSuccess implements Action {
    readonly type = AuthActionTypes.LoadAuthsSuccess;

    constructor(public payload: { data: any }) { }
}

export class LoadAuthsFailure implements Action {
    readonly type = AuthActionTypes.LoadAuthsFailure;

    constructor(public payload: { error: any }) { }
}

export type AuthActions =
    LoadAuths
    | LoadAuthsSuccess
    | LoadAuthsFailure;

