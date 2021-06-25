import { rest } from 'msw';
import { Api } from '../api';
import { mockedProducts } from '../__mocks__/mockedProducts';

export const PRODUCTS_API_URL = 'http://localhost:5000/products'

export const handlers = [
  rest.get(PRODUCTS_API_URL, (_req, res, ctx) => {
    return res(ctx.json(mockedProducts))
  }),
];