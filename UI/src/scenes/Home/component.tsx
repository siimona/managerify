import { useStyles } from "./styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, Button, InputBase, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getProducts, removeProduct } from "./../../redux/product/actions";
import { RootState, useAppDispatch, useAppStateSelector } from "~/redux";
import { Product, ProductState } from "~/redux/product/types/product-general";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const products = useAppStateSelector<ProductState>(
    (state: RootState) => state.products
  );
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [searchCategory, setCategory] = React.useState<any>("");
  

  const deleteProduct = (productId: string) => {
    dispatch(removeProduct(productId)).then((response) => {
      return response;
    });
  };

  return (
    <>
      <Grid>
        <Grid container item direction="row">
          <Grid item xs={4}>
            <Search className={classes.searchBar}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Search>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                label="Category"
                value={searchCategory}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={""}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"desks"}>Desks</MenuItem>
                <MenuItem value={"cabinets"}>Cabinets</MenuItem>
                <MenuItem value={"sofas"}>Sofas</MenuItem>
                <MenuItem value={"chairs"}>chairs</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box>
          <Grid container item direction="row">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="center">
                      Initial Stock
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Current Stock
                    </StyledTableCell>
                    <StyledTableCell align="center"> Purchases</StyledTableCell>
                    <StyledTableCell align="center"> Category</StyledTableCell>
                    <StyledTableCell align="center">Provider</StyledTableCell>
                    <StyledTableCell align="center">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Weight</StyledTableCell>
                    <StyledTableCell align="center">Unit</StyledTableCell>
                    <StyledTableCell align="center">SKU</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.productsData.products &&
                    products.productsData.products
                      .filter((product: Product) => {
                        if (searchTerm === "") {
                          return product;
                        } else if (
                          product
                            .name!.toLowerCase()
                            .includes(searchTerm!.toLowerCase())
                        ) {
                          return product;
                        }
                      })
                      .filter((product: Product) => {
                        if (searchCategory === "") {
                          return product;
                        } else if (product.category == searchCategory) {
                          return product;
                        }
                      })
                      .map((product: Product) => (
                        <StyledTableRow key={product.id}>
                          <StyledTableCell component="th" scope="row">
                            <Link
                              to={{
                                pathname: `/product/${product.id}`,
                              }}
                              className={classes.link}
                            >
                              {product.name}
                            </Link>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.initialStock}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Typography
                              className={
                                product.currentStock < 15
                                  ? classes.lowStock
                                  : classes.goodStock
                              }
                            >
                              {" "}
                              {product.currentStock}{" "}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.purchases}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.category}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.provider}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.description}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.price}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.weight}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.unit}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {product.sku}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => deleteProduct(product.id)}
                            >
                              Delete
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
