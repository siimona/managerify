import { Product } from './product-general';

export const EDIT_PRODUCT_LOADING = 'EDIT_PRODUCT_LOADING';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAIL = 'EDIT_PRODUCT_FAIL';

export type EditProductResponsePayload = {
  product: Product;
};

export type EditProductLoadingAction = {
  type: typeof EDIT_PRODUCT_LOADING;
};

export type EditProductSuccessAction = {
  type: typeof EDIT_PRODUCT_SUCCESS;
  payload: EditProductResponsePayload;
};

export type EditProductFailAction = {
  type: typeof EDIT_PRODUCT_FAIL;
  payload: Error;
};
