import { AlertActionsType, AlertActionTypes } from '../constants';
import { v4 as uuidv4 } from 'uuid';

interface Alert {
  id: string;
  message?: string;
  fade: boolean;
}

export interface AlertState {
  stack: Alert[];
}

export const initialAlertReducer = {
  stack: []
}

export const alertReducer = (state: AlertState = initialAlertReducer, action: AlertActionTypes): AlertState => {
  switch (action.type) {
    case AlertActionsType.PUSH_ALERT_ITEM: {
      const alert: Alert = {
        id: uuidv4(),
        message: action.payload,
        fade: false
      }

      return {
        stack: [...state.stack, alert]
      };
    }
    case AlertActionsType.POP_ALERT_ITEM: {
      const id = action.payload;
      const alertIndex = state.stack.findIndex((item) => item.id === id);
      const alert = state.stack[alertIndex];
      const fadeAlert = {
        ...alert,
        fade: true
      }
      return {
        stack: [
          ...state.stack.slice(0, alertIndex - 1),
          fadeAlert,
          ...state.stack.slice(alertIndex + 1)
        ]
      };
    }
    case AlertActionsType.CLEAR_ALERT_STACK: {
      return {
        stack: []
      }
    }
    default:
      return state;
  }
}