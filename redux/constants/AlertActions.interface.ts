import { Action } from 'redux';

// todo: Переместить интерфейс в Реакт компонент
export interface Alert {
  id: string;
  message?: string;
  fade: boolean;
}

export enum AlertActionsType {
  PUSH_ALERT_ITEM = 'PUSH_ALERT_ITEM',
  POP_ALERT_ITEM = 'POP_ALERT_ITEM',
  CLEAR_ALERT_STACK = 'CLEAR_ALERT_STACK'
};

export interface PushAlertAction extends Action<AlertActionsType> {
  type: AlertActionsType.PUSH_ALERT_ITEM;
  payload: string;
}

export interface PopAlertAction extends Action<AlertActionsType> {
  type: AlertActionsType.POP_ALERT_ITEM;
  payload: string;
}

export interface ClearAlertStackAction extends Action<AlertActionsType> {
  type: AlertActionsType.CLEAR_ALERT_STACK
}

export type AlertActionTypes = PushAlertAction | PopAlertAction | ClearAlertStackAction;