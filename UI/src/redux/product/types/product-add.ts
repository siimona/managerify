import { Product } from './product-general';

export const ADD_PRODUCT_LOADING = 'ADD_PRODUCT_LOADING';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';


export type AddProductResponsePayload = {
  data: Product;
};

export type AddProductLoadingAction = {
  type: typeof ADD_PRODUCT_LOADING;
};

export type AddProductSuccessAction = {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: AddProductResponsePayload;
};

export type AddProductFailAction = {
  type: typeof ADD_PRODUCT_FAIL;
  payload: Error;
};
