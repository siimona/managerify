import { AppDispatch } from "..";

import {
  ProductDispatchTypes,
  Product,
  ProductInput,
} from "./types/product-general";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  AddProductResponsePayload,
} from "./types/product-add";
import {
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_LOADING,
  EDIT_PRODUCT_SUCCESS,
  EditProductResponsePayload,
} from "./types/product-edit";
import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./types/product-get";
import {
  REMOVE_PRODUCT_FAIL,
  REMOVE_PRODUCT_LOADING,
  REMOVE_PRODUCT_SUCCESS,
  RemoveProductFailAction,
  RemoveProductLoadingAction,
  RemoveProductSuccessAction,
} from "./types/product-remove";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_STATISTICS_FAIL,
  GET_STATISTICS_LOADING,
  GET_STATISTICS_SUCCESS,
} from "./types/products-get";
import { client } from "../../.../../index";
import { GET_PRODUCTS, GET_PRODUCT, GET_STATISTICS } from "../../graphql/queries";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../../graphql/mutations";

export const getProducts = () => async (dispatch: AppDispatch<unknown>) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  client
    .query({
      query: GET_PRODUCTS,
    })
    .then((result) => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: result.data }))
    .catch(() => {
      dispatch({ type: GET_PRODUCTS_FAIL });
    });
};

export const getStatistics = () => async (dispatch: AppDispatch<unknown>) => {
  dispatch({ type: GET_STATISTICS_LOADING });

  client
    .query({
      query: GET_STATISTICS,
    })
    .then((result) =>
      dispatch({ type: GET_STATISTICS_SUCCESS, payload: result.data })
    )
    .catch(() => {
      dispatch({ type: GET_STATISTICS_FAIL });
    });
};


export const getProduct =
  (productId: string) => async (dispatch: AppDispatch<unknown>) => {
    dispatch({ type: GET_PRODUCT_LOADING });

    client
    .query({
      query: GET_PRODUCT,
      variables: {
        id: productId
      }
    })
    .then((result) => dispatch({ type: GET_PRODUCT_SUCCESS, payload: result.data }))
      .catch(() => {
        dispatch({ type: GET_PRODUCT_FAIL });
      });

  };

export const addProductLoading = (): ProductDispatchTypes => ({
  type: ADD_PRODUCT_LOADING,
});

export const addProductSuccess = (
  payload: AddProductResponsePayload
): ProductDispatchTypes => ({
  type: ADD_PRODUCT_SUCCESS,
  payload,
});

export const addProductFail = (payload: Error): ProductDispatchTypes => ({
  type: ADD_PRODUCT_FAIL,
  payload,
});

export const addNewProduct =
  (addProductPayload: ProductInput) =>
  async (dispatch: AppDispatch<unknown>) => {
    dispatch(addProductLoading());
    return await new Promise<Product>((resolve, reject) => {
      client
        .mutate({
          mutation: CREATE_PRODUCT,
          variables: {
            name: addProductPayload.name,
            description: addProductPayload.description,
            price: addProductPayload.price,
            sku: addProductPayload.sku,
            weight: addProductPayload.weight,
            provider: addProductPayload.provider,
            unit: addProductPayload.unit,
            initialStock: addProductPayload.initialStock,
            currentStock: addProductPayload.currentStock,
            category: addProductPayload.category,
            purchases: addProductPayload.purchases,
          },
        })
        .then((res) => {
          dispatch(addProductSuccess(res.data));
          resolve(res.data);
        })
        .catch((err) => {
          dispatch(addProductFail(err));
          reject(err);
        });
    });
  };

export const editProductLoading = (): ProductDispatchTypes => ({
  type: EDIT_PRODUCT_LOADING,
});

export const editProductSuccess = (
  payload: EditProductResponsePayload
): ProductDispatchTypes => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload,
});

export const editProductFail = (payload: Error): ProductDispatchTypes => ({
  type: EDIT_PRODUCT_FAIL,
  payload,
});

export const editProduct =
  (editProductPayload: ProductInput, productId: string) =>
  async (dispatch: AppDispatch<unknown>) => {
    dispatch(editProductLoading());
    return await new Promise<Product>((resolve, reject) => {
      client
        .mutate({
          mutation: UPDATE_PRODUCT,
          variables: {
            id: productId,
            name: editProductPayload.name,
            description: editProductPayload.description,
            price: editProductPayload.price,
            sku: editProductPayload.sku,
            weight: editProductPayload.weight,
            provider: editProductPayload.provider,
            unit: editProductPayload.unit,
            initialStock: editProductPayload.initialStock,
            currentStock: editProductPayload.currentStock,
            category: editProductPayload.category,
            purchases: editProductPayload.purchases,
          },
        })
        .then((res) => {
          dispatch(editProductSuccess(res.data));
          resolve(res.data);
        })
        .catch((err) => {
          dispatch(editProductFail(err));
          reject(err);
        });
    });
  };

export const removeProductLoading = (): RemoveProductLoadingAction => ({
  type: REMOVE_PRODUCT_LOADING,
});

export const removeProductSuccess = (
  payload: string
): RemoveProductSuccessAction => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload,
});

export const removeProductFail = (payload: Error): RemoveProductFailAction => ({
  type: REMOVE_PRODUCT_FAIL,
  payload,
});

export const removeProduct =
  (productId: string) => async (dispatch: AppDispatch<unknown>) => {
    dispatch(removeProductLoading());

    try {
      return await new Promise((resolve, reject) => {
        client
        .mutate({
          mutation: DELETE_PRODUCT,
          variables: {
            id:productId,
          }
        })
          .then((res) => {

            dispatch(removeProductSuccess(productId));
            resolve(res.data);
          })
          .catch((err) => {
            dispatch(removeProductFail(err));
            reject(err);
          });
      });
    } catch (err) {
      return err;
    }
  };
