import { AxiosInstance, AxiosResponse } from 'axios';
import { LoginFormProps } from '../components/auth/LoginForm';
import { SignupFormProps } from '../components/auth/SignupForm';
import { UserData } from '../pages';

interface ResponseApi {
  status: number;
  errorMessage?: string;
  data?: {
    user: UserData,
    token: string
  }
}

export const AuthApi = (instance: AxiosInstance) => {
  return {
    getMe: async (): Promise<UserData> => {
      const { data } = await instance.get('/auth/me');
      return data;
    },
    logIn: async (postData: LoginFormProps): Promise<ResponseApi> => {
      try {
        const { status, data } = await instance.post('/auth/login', {
          phone: postData.phone,
          password: postData.password
        }, { withCredentials: true });

        return { status, data };
      } catch (error) {
        const { status, message: errorMessage } = error;

        return { status, errorMessage }
      }
    },
    register: async (postData: SignupFormProps): Promise<ResponseApi> => {
      try {
        const { status, data } = await instance.post('/auth/register', {
          name: postData.name,
          surname: postData.surname,
          address: postData.address,
          phone: postData.phone,
          password: postData.password,
          password2: postData.password2
        }, { withCredentials: true });

        return { status, data };
      } catch (error) {
        const { status, message: errorMessage } = error;

        return { status, errorMessage };
      }
    },
    sendSMS: async (phoneNumber: string): Promise<void | ResponseApi> => {
      try {
        await instance.get(`/auth/sms?phone=${phoneNumber}`);
      } catch (error) {
        const { status, message: errorMessage } = error;
        return { status, errorMessage };
      }
    },
    activate: async (code: string): Promise<void | ResponseApi> => {
      try {
        await instance.post(`/auth/sms/activate`, {
          code
        });
      } catch (error) {
        const { status, message: errorMessage } = error;

        return { status, errorMessage };
      }
    }
  }
}