import { UserActionsType, UserActionTypes } from '../constants';
import { UserData } from '../../pages';

export interface UserState {
  data?: UserData;
};

export const initialUserReducer = {
  data: {} as UserData,
};

export const userReducer = (state: UserState = initialUserReducer, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}