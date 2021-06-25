import mockAxios from '../__mocks__/axios';
import { Axios } from '../core/axios';
import axios from 'axios';
import { Api } from '../api';
import { mockedProducts } from '../__mocks__/mockedProducts';
import { createOrderMockData, ordersMockData } from '../__mocks__/mockedOrder';
import { mockedCode, mockedLogin, mockedRegister, userMockData } from '../__mocks__/mockedUser';

describe('AuthApi', () => {
  it('getMe', async () => {
    mockAxios.get.mockResolvedValue({
      data: userMockData
    });

    const user = await Api(mockAxios).getMe();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(user._id).toEqual(userMockData._id);
  });

  it('logIn', async () => {
    mockAxios.post.mockResolvedValue({
      data: {
        user: userMockData
      },
    });

    const { data } = await Api(mockAxios).logIn(mockedLogin);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(data.user).toEqual(userMockData);

    mockAxios.post.mockImplementation(() => Promise.reject({ status: 401, message: 'Предоставлены неверные учетные данные' }));
    const res = await Api(mockAxios).logIn(mockedLogin);
    expect(mockAxios.post).toHaveBeenCalledTimes(2);
    expect(res).toEqual({ status: 401, errorMessage: 'Предоставлены неверные учетные данные' });
  });

  it('register', async () => {
    mockAxios.post.mockResolvedValue({
      data: {
        user: userMockData
      },
    });

    const { data } = await Api(mockAxios).register(mockedRegister);
    expect(mockAxios.post).toHaveBeenCalledTimes(3);
    expect(data.user).toEqual(userMockData);
  });

  it('register error', async () => {
    mockAxios.post.mockImplementation(() => Promise.reject({ status: 401, message: 'Предоставлены неверные учетные данные1' }));
    const res = await Api(mockAxios).logIn({ ...mockedRegister, password: '1243456' });
    console.log(res);
    expect(mockAxios.post).toHaveBeenCalledTimes(4);
    expect(res).toEqual({ status: 401, errorMessage: 'Предоставлены неверные учетные данные1' });
  })

  it('sendSMS', async () => {
    await Api(mockAxios).sendSMS(mockedRegister.phone);
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });

  it('activate', async () => {
    mockAxios.post.mockResolvedValue({
      data: {
        user: userMockData
      },
    });

    await Api(mockAxios).activate(mockedCode);
    expect(mockAxios.post).toHaveBeenCalledTimes(5);
  })
})