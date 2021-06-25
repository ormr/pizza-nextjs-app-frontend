import mockAxios from '../__mocks__/axios';
import { Axios } from '../core/axios';
import axios from 'axios';
import { Api } from '../api';
import { mockedProducts } from '../__mocks__/mockedProducts';
import { createOrderMockData, ordersMockData } from '../__mocks__/mockedOrder';
import { mockedLogin, userMockData } from '../__mocks__/mockedUser';

const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('axios test with mocking', () => {
  it('getProducts', async () => {
    mockAxios.get.mockResolvedValue({
      data: mockedProducts
    });

    const products = await Api(mockedAxios).getProducts();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(products[0].id).toEqual('33a86e11-26be-4809-93d0-cf33aaf7cf11');
  });

  it('getOrders', async () => {
    mockAxios.get.mockResolvedValue({
      data: ordersMockData
    });

    const orders = await Api(mockedAxios).getOrders();
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(orders[0].time).toEqual(ordersMockData[0].time)
  });

  it('createOrder', async () => {
    mockAxios.post.mockResolvedValue({
      data: createOrderMockData
    });

    await Api(mockedAxios).createOrder(createOrderMockData);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });
})