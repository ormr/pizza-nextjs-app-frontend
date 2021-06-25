import { Dispatch } from 'redux';
import { AlertActionsType, Alert } from '../constants';

export const pushAlert = (payload: string) => (dispatch: Dispatch) => {
  dispatch({
    type: AlertActionsType.PUSH_ALERT_ITEM,
    payload
  });
}

export const popAlert = (payload: string) => (dispatch: Dispatch) => {
  dispatch({
    type: AlertActionsType.POP_ALERT_ITEM,
    payload
  });
}

export const clearAlert = () => (dispatch: Dispatch) => {
  dispatch({
    type: AlertActionsType.CLEAR_ALERT_STACK
  })
}