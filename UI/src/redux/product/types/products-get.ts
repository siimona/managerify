import { Product, Purchase, PurchaseCategory, Stock } from "./product-general";

export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export const GET_STATISTICS_LOADING = "GET_STATISTICS_LOADING";
export const GET_STATISTICS_SUCCESS = "GET_STATISTICS_SUCCESS";
export const GET_STATISTICS_FAIL = "GET_STATISTICS_FAIL";

export type GetProductsResponsePayload = {
  total: number;
  products: Product[];
};

export type GetProductsResponse = {
  data: { products: Product[] };
};

export type GetProductsAction = {
  type: typeof GET_PRODUCTS_LOADING;
};

export type GetProductsSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: GetProductsResponsePayload;
};

export type GetProductsFailAction = {
  type: typeof GET_PRODUCTS_FAIL;
};


export type GetStatisticsResponsePayload = {
  total: number;
  mostPurchased: Purchase[];
  leastPurchased: Purchase[];
  purchasedCategories: PurchaseCategory[];
  leastStock: Stock[];
};

export type GetStatisticsResponse = {
  data: {
    mostPurchased: Purchase[];
    leastPurchased: Purchase[];
    purchasedCategories: PurchaseCategory[];
    leastStock: Stock[];
  };
};

export type GetStatisticsAction = {
  type: typeof GET_STATISTICS_LOADING;
};

export type GetStatisticsSuccessAction = {
  type: typeof GET_STATISTICS_SUCCESS;
  payload: GetStatisticsResponsePayload;
};

export type GetStatisticsFailAction = {
  type: typeof GET_STATISTICS_FAIL;
};
