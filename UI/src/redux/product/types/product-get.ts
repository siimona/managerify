import { Product } from './product-general';

export const GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

export type GetProductResponsePayload = {
  product: Product;
};

export type GetProductResponse = {
  data: { product: Product };
};

export type GetProductAction = {
  type: typeof GET_PRODUCT_LOADING;
};

export type GetProductSuccessAction = {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: GetProductResponsePayload;
};

export type GetProductFailAction = {
  type: typeof GET_PRODUCT_FAIL;
};
