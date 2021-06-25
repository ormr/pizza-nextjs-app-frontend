import {
  SetUserDataAction,
  UserActionsType,
} from '../redux/constants/UserActions.interface';
import { initialUserReducer, userReducer } from '../redux/reducers/userReducer';
import { userMockData } from '../__mocks__/mockedUser';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(initialUserReducer, {} as any)).toEqual(
      initialUserReducer
    );
  });

  it('should handle SET_USER_DATA', () => {
    const setUserData: SetUserDataAction = {
      type: UserActionsType.SET_USER_DATA,
      payload: userMockData,
    };

    expect(userReducer(initialUserReducer, setUserData)).toEqual({
      data: userMockData,
    });
  });
});
