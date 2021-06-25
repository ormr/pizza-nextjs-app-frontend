import {
  AlertActionsType,
  ClearAlertStackAction,
  PopAlertAction,
  PushAlertAction,
} from '../redux/constants/AlertActions.interface';
import {
  alertReducer,
  AlertState,
  initialAlertReducer,
} from '../redux/reducers/alertReducer';

import { popAlertMockData } from '../__mocks__/mockedAlert';

describe('alertReducer', () => {
  it('should return the initial state', () => {
    expect(alertReducer(initialAlertReducer, {} as any)).toEqual(
      initialAlertReducer
    );
  });

  it('should handle PUSH_ALERT_ITEM', () => {
    const pushAlertAction: PushAlertAction = {
      type: AlertActionsType.PUSH_ALERT_ITEM,
      payload: 'Test',
    };

    expect(alertReducer(initialAlertReducer, pushAlertAction)).toEqual({
      stack: [
        {
          id: expect.any(String),
          message: pushAlertAction.payload,
          fade: false,
        },
      ],
    });
  });

  it('should handle POP_ALERT_ITEM', () => {
    const popAlertAction: PopAlertAction = {
      type: AlertActionsType.POP_ALERT_ITEM,
      payload: popAlertMockData.stack[0].id,
    };

    expect(
      alertReducer(initialAlertReducer, popAlertAction).stack[0].fade
    ).toBe(true);
  });

  it('should handle CLEAR_ALERT_STACK', () => {
    const clearAlertAction: ClearAlertStackAction = {
      type: AlertActionsType.CLEAR_ALERT_STACK,
    };

    expect(alertReducer(initialAlertReducer, clearAlertAction)).toEqual({
      stack: [],
    });
  });
});
