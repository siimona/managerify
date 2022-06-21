import {
  AddProductFailAction,
  AddProductLoadingAction,
  AddProductSuccessAction,
} from "./product-add";
import {
  EditProductFailAction,
  EditProductLoadingAction,
  EditProductSuccessAction,
} from "./product-edit";
import {
  GetProductAction,
  GetProductFailAction,
  GetProductSuccessAction,
} from "./product-get";
import {
  RemoveProductFailAction,
  RemoveProductLoadingAction,
  RemoveProductSuccessAction,
} from "./product-remove";
import {
  GetProductsAction,
  GetProductsFailAction,
  GetProductsResponsePayload,
  GetProductsSuccessAction,
} from "./products-get";
import {
  GetStatisticsAction,
  GetStatisticsFailAction,
  GetStatisticsResponsePayload,
  GetStatisticsSuccessAction,
} from "./products-get";

export type Product = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  initialStock: number;
  currentStock: number;
  purchases: number;
  category: string;
  provider: string;
  price: number;
  weight: number;
  unit: string;
  description: string;
  sku: string;
};

export type Purchase = {
  id: string;
  name: string;
  purchases: number;
};

export type PurchaseCategory = {
  category: string;
  purchases: number;
};


export type Stock = {
  id: string;
  name: string;
  currentStock: number;
};


export type ProductInput = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  initialStock: number;
  currentStock: number;
  purchases: number;
  category: string;
  provider: string;
  price: number;
  weight: number;
  unit: string;
  description: string;
  sku: string;
};

export type ProductDispatchTypes =
  | AddProductLoadingAction
  | AddProductSuccessAction
  | AddProductFailAction
  | EditProductLoadingAction
  | EditProductSuccessAction
  | EditProductFailAction
  | GetProductAction
  | GetProductSuccessAction
  | GetProductFailAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailAction
  | RemoveProductLoadingAction
  | RemoveProductSuccessAction
  | RemoveProductFailAction
  | GetStatisticsAction
  | GetStatisticsFailAction
  | GetStatisticsSuccessAction;

export type ProductState = {
  loading: boolean;
  productsData: GetProductsResponsePayload;
  productData: Product;
  statistics: GetStatisticsResponsePayload;
};
