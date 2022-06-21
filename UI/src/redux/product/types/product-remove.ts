export const REMOVE_PRODUCT_LOADING = 'REMOVE_PRODUCT_LOADING';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAIL = 'REMOVE_PRODUCT_FAIL';

export type RemoveProductLoadingAction = {
  type: typeof REMOVE_PRODUCT_LOADING;
};

export type RemoveProductSuccessAction = {
  type: typeof REMOVE_PRODUCT_SUCCESS;
  payload: string;
};

export type RemoveProductFailAction = {
  type: typeof REMOVE_PRODUCT_FAIL;
  payload: Error;
};
