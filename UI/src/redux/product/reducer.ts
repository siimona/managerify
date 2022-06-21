import { ProductDispatchTypes, ProductState } from "./types/product-general";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
} from "./types/product-add";
import {
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_LOADING,
  EDIT_PRODUCT_SUCCESS,
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
} from "./types/product-remove";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_STATISTICS_FAIL,
  GET_STATISTICS_LOADING,
  GET_STATISTICS_SUCCESS,
} from "./types/products-get";

export const initialProductState: ProductState = {
  loading: false,
  productsData: { total: 0, products: [] },
  productData: {
    id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "",
    initialStock: 0,
    currentStock: 0,
    purchases: 0,
    category: "",
    provider: "",
    price: 0,
    weight: 0,
    unit: "",
    description: "",
    sku: "",
  },
  statistics: {
    total: 0,
    mostPurchased: [],
    leastPurchased: [],
    purchasedCategories: [],
    leastStock: [],
  },
};

export const productReducer = (
  state: ProductState = initialProductState,
  action: ProductDispatchTypes
): ProductState => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_STATISTICS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_PRODUCT_LOADING:
    case EDIT_PRODUCT_LOADING:
    case GET_PRODUCT_LOADING:
    case REMOVE_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_PRODUCT_FAIL:
    case EDIT_PRODUCT_FAIL:
    case GET_PRODUCT_FAIL:
    case GET_PRODUCTS_FAIL:
    case GET_STATISTICS_FAIL:
    case REMOVE_PRODUCT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productsData: {
          total: state.productsData.total + 1,
          products: action.payload.products,
        },
      };
    }
    case GET_STATISTICS_SUCCESS: {
      return {
        ...state,
        loading: false,
        statistics: {
          total: state.productsData.total + 1,
          mostPurchased: action.payload.mostPurchased,
          leastPurchased: action.payload.leastPurchased,
          purchasedCategories: action.payload.purchasedCategories,
          leastStock: action.payload.leastStock,
        },
      };
    }
    case EDIT_PRODUCT_SUCCESS:
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        productData: action.payload.product,
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        productData: action.payload.data,
      };
    }
    case REMOVE_PRODUCT_SUCCESS: {
      return {
        ...state,
        productsData: {
          total: state.productsData.total - 1,
          products: state.productsData.products.filter(
            (product) => !(product.id === action.payload)
          ),
        },
      };
    }
    default:
      return state;
  }
};
