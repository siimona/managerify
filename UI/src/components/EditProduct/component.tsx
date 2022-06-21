import {
  Grid,
  FormControl,
  BottomNavigation,
  Card,
  TextField,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "~/redux";
import { Product, ProductInput } from "~/redux/product/types/product-general";
import React from "react";
import { editProduct } from "~/redux/product/actions";


type Props = {
  product: Product;
};


export const EditProduct = ( { product }: Props) => {
  const dispatch = useAppDispatch();
  const [updatedProduct, setProduct] = React.useState<ProductInput>(product);

  const updateProduct = (updatedProduct: ProductInput, productId: string) => {
    dispatch(editProduct(updatedProduct, product.id));
  };


  return (
    <>
      <Card sx={{ margin: "auto", width: "50%", paddingBottom: 5 }}>
        <CardContent>
          <Typography variant="body2">
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-email-input"
                    label="Name"
                    type="text"
                    variant="standard"
                    name="name"
                    defaultValue={product.name}
                    onChange={(e) => {
                      setProduct({ ...updatedProduct, name: e.target.value });
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Initial Stock"
                    type="text"
                    variant="standard"
                    name="initialStock"
                    defaultValue={product.initialStock}
                    onChange={(e) => {
                      setProduct({
                        ...updatedProduct,
                        initialStock: +e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Provider"
                    type="text"
                    variant="standard"
                    name="provider"
                    defaultValue={product.provider}
                    onChange={(e) => {
                      setProduct({
                        ...updatedProduct,
                        provider: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Category"
                    type="text"
                    variant="standard"
                    name="category"
                    defaultValue={product.category}
                    onChange={(e) => {
                      setProduct({
                        ...updatedProduct,
                        category: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Price"
                    type="number"
                    variant="standard"
                    name="price"
                    defaultValue={product.price}
                    onChange={(e) => {
                      setProduct({ ...updatedProduct, price: +e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Weight"
                    type="number"
                    variant="standard"
                    name="weight"
                    defaultValue={product.weight}
                    onChange={(e) => {
                      setProduct({
                        ...updatedProduct,
                        weight: +e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Unit"
                    type="text"
                    variant="standard"
                    name="unit"
                    defaultValue={product.unit}
                    onChange={(e) => {
                      setProduct({ ...updatedProduct, unit: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="Description"
                    type="text"
                    variant="standard"
                    name="description"
                    defaultValue={product.description}
                    onChange={(e) => {
                      setProduct({
                        ...updatedProduct,
                        description: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="filled-password-input"
                    label="SKU"
                    type="text"
                    variant="standard"
                    name="description"
                    defaultValue={product.sku}
                    onChange={(e) => {
                      setProduct({ ...updatedProduct, sku: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ margin: "auto", width: "50%" }}>
        <CardContent>
          <Typography variant="body2">
            <BottomNavigation>
              <Button
                variant="contained"
                size="large"
                onClick={() => updateProduct(updatedProduct, product.id)}
              >
                {" "}
                Update Product{" "}
              </Button>
            </BottomNavigation>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
