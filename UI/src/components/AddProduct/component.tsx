import {
  Box,
  CardContent,
  Container,
  FormControl,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useStyles } from "./styles";
import { useAppDispatch } from "~/redux";
import { ProductInput } from "~/redux/product/types/product-general";
import { addNewProduct } from "~/redux/product/actions";
import React from "react";
import Modal from "@mui/material/Modal";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

export const AddProduct = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [product, setProduct] = React.useState<ProductInput>({
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
  });

  const addProduct = () => {
    dispatch(addNewProduct(product)).then((product) => {
      handleClose();
      return product;
    });
  };

  return (
    <>
      <Button onClick={handleOpen} className={classes.icons}>
        <AddBoxRoundedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <Container sx={{ display: "inline-block", textAlign: "center" }}>
            <Box sx={{ paddingTop: 10 }}>
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
                          defaultValue=""
                          onChange={(e) => {
                            setProduct({ ...product, name: e.target.value });
                          }}
                          value={product.name}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="filled-password-input"
                          label="Initial Stock"
                          type="number"
                          variant="standard"
                          name="initialStock"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              initialStock: +e.target.value,
                            });
                          }}
                          value={product.initialStock}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="filled-password-input"
                          label="Current Stock"
                          type="number"
                          variant="standard"
                          name="currentStock"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              currentStock: +e.target.value,
                            });
                          }}
                          value={product.currentStock}
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
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              category: e.target.value,
                            });
                          }}
                          value={product.category}
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
                          defaultValue=""
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              provider: e.target.value,
                            });
                          }}
                          value={product.provider}
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
                          onChange={(e) => {
                            setProduct({ ...product, price: +e.target.value });
                          }}
                          value={product.price}
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
                          onChange={(e) => {
                            setProduct({ ...product, weight: +e.target.value });
                          }}
                          value={product.weight}
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
                          defaultValue=""
                          onChange={(e) => {
                            setProduct({ ...product, unit: e.target.value });
                          }}
                          value={product.unit}
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
                          defaultValue=""
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              description: e.target.value,
                            });
                          }}
                          value={product.description}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="filled-password-input"
                          label="SKU"
                          type="text"
                          variant="standard"
                          name="sku"
                          defaultValue=""
                          onChange={(e) => {
                            setProduct({ ...product, sku: e.target.value });
                          }}
                          value={product.sku}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => addProduct()}
                      className={classes.button}
                    >
                      Add Product
                    </Button>

                    <hr />
                  </FormControl>
                </Typography>
              </CardContent>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
