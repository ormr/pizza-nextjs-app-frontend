import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { clearAlert, popAlert, pushAlert } from '../redux/actions';
import { AlertActionsType } from '../redux/constants/AlertActions.interface';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Alert actions', () => {
  it('implements PUSH_ALERT_ITEM action', () => {
    const store = mockStore({ stack: [] });

    const expectedActions = [
      {
        type: AlertActionsType.PUSH_ALERT_ITEM,
        payload: 'Test',
      },
    ];

    pushAlert('Test')(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements POP_ALERT_ITEM action', () => {
    const store = mockStore({ stack: [] });

    const expectedActions = [
      {
        type: AlertActionsType.POP_ALERT_ITEM,
        payload: '09e6a08d-dab3-45fb-8c0c-ed6a96c1371f',
      },
    ];

    popAlert('09e6a08d-dab3-45fb-8c0c-ed6a96c1371f')(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CLEAR_ALERT_STACK action', () => {
    const store = mockStore({ stack: [] });

    const expectedActions = [
      {
        type: AlertActionsType.CLEAR_ALERT_STACK,
      },
    ];

    clearAlert()(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
