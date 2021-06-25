import { Dispatch } from 'redux';
import {
  UserActionsType,
  SetUserDataAction,
} from '../constants';
import { UserData } from '../../pages';


export const setUserData = (payload: UserData) => async (dispatch: Dispatch<SetUserDataAction>) => {
  dispatch({
    type: UserActionsType.SET_USER_DATA,
    payload
  });
};