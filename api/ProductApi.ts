import { AxiosInstance } from 'axios';
import { Product } from '../types/Product.interface';
import { OrderCart } from '../components/Cart/CartFooter';
import { Order } from '../types/Order.interface';

export const ProductApi = (instance: AxiosInstance) => {
  return {
    getProducts: async (): Promise<Product[]> => {
      const { data } = await instance.get('/products');
      return data;
    },
    createOrder: async (payload: OrderCart): Promise<void> => {
      await instance.post(`/orders`, payload);
    },
    getOrders: async (): Promise<Order> => {
      const { data } = await instance.get(`/orders/user`);
      return data;
    }
  };
};