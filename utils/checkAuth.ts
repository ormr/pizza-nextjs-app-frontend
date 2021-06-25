import { Api } from '../api';
import { UserData } from '../pages';
import { setUserData } from '../redux/actions';
// import { dispatch }

// TODO: Типизировать

export const checkAuth = async (
  ctx: any & {
    store: any;
  },
): Promise<UserData | null> => {
  try {
    const user = await Api(ctx).getMe();
    return user;
  } catch (error) {
    return null;
  }
};
