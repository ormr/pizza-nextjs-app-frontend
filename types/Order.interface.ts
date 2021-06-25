export interface OrderProduct {
  id: string;
  name: string;
  size: string;
  crustType: string;
  diameter: number;
  price: number;
  imageSrc: string;
  count: number;
  topping: {
    name: string;
    price: string;
  }[]
}

export interface Order {
  number: number;
  status: OrderStatus;
  list: OrderProduct[];
  price: number;
  customer: string;
  time: Date;
  _id: string;
}

export enum OrderStatus {
  Receive = 'RECEIVE',
  Making = 'MAKING',
  DELIVERY = 'DELIVERY',
  COMPLETE = 'COMPLETE',
  CANCELED = 'CANCELED'
}