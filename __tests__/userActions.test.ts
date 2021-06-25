import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setUserData } from '../redux/actions';
import { UserActionsType } from '../redux/constants/UserActions.interface';
import { userMockData } from '../__mocks__/mockedUser';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User actions', () => {
  it('implement SET_USER_DATA action', () => {
    const store = mockStore({ data: {} });

    const expectedActions = [
      {
        type: UserActionsType.SET_USER_DATA,
        payload: userMockData
      }
    ];

    setUserData(userMockData)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  })
})