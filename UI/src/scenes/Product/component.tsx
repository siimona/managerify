import { EditProduct } from "../../components/EditProduct";
import {
  Grid,
  Box
} from "@mui/material";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppStateSelector } from "~/redux";
import { emptyProduct } from "~/redux/product/constants";
import { getProduct } from "~/redux/product/actions";
import { useEffect } from "react";
import { Product } from "~/redux/product/types/product-general";

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const product = useAppStateSelector<Product>((state: RootState) =>
    productId && state.products.productData
      ? state.products.productData
      : emptyProduct
  );
 
  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, product, productId]);

  return (
    <>
      <Grid>
        <Box sx={{ paddingTop: 10 }}>
        {product.id === productId ? <EditProduct product={product}/> : '' } 
        </Box>
      </Grid>
    </>
  );
};
