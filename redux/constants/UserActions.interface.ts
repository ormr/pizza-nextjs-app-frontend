import { Action } from 'redux';
import { UserData } from '../../pages';

export enum UserActionsType {
  SET_USER_DATA = 'SET_USER_DATA',
  LOGOUT = 'LOGOUT'
}

export interface SetUserDataAction extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA,
  payload?: UserData
}

export interface LogOutAction extends Action<UserActionsType> {
  type: UserActionsType.LOGOUT
}

export type UserActionTypes =
  | LogOutAction
  | SetUserDataAction