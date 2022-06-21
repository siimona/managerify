import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { RootState, useAppDispatch, useAppStateSelector } from "~/redux";
import { useEffect } from "react";
import { getStatistics } from "~/redux/product/actions";
import {
  Purchase,
  PurchaseCategory,
  Stock,
} from "~/redux/product/types/product-general";
import { useStyles } from "./styles";

export const Statistics = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getStatistics());
  }, []);

  const colors = [
    "#007bff", // blue
    "#FF0000", // red
    "#FFD700", // yellow
    "#28a745", // green
    "#FF00FF", // violet
    "#ff9900", // orange
    "#00FFFF", // aqua marine
    "#d69ae5", // red violet
    "#FF8F66", // orange red
    "#00FF00", // lime
  ];

  const statistics = useAppStateSelector<any>(
    (state: RootState) => state.products.statistics
  );
  const leastPurchased = statistics.leastPurchased;

  const leastPurchasedLabels = leastPurchased.map((item: Purchase) => {
    return item.name;
  });

  const leastPurchasedData = leastPurchased.map((item: Purchase) => {
    return item.purchases;
  });

  const leastPurchases = {
    labels: leastPurchasedLabels,
    datasets: [
      {
        data: leastPurchasedData,
        backgroundColor: colors,
      },
    ],
  };

  const findMinPurchased = (): Purchase => {
    let min: Purchase = leastPurchased[0];
    leastPurchased.map((item: Purchase) => {
      if (item.purchases < min.purchases) {
        min = item;
      }
    });
    return min;
  };

  const mostPurchased = statistics.mostPurchased;

  const findMaxPurchased = (): Purchase => {
    let max: Purchase = mostPurchased[0];
    mostPurchased.map((item: Purchase) => {
      if (item.purchases > max.purchases) {
        max = item;
      }
    });
    return max;
  };

  const mostPurchasedLabels = mostPurchased.map((item: Purchase) => {
    return item.name;
  });

  const mostPurchasedData = mostPurchased.map((item: Purchase) => {
    return item.purchases;
  });

  const mostPurchases = {
    labels: mostPurchasedLabels,
    datasets: [
      {
        data: mostPurchasedData,
        backgroundColor: colors,
      },
    ],
  };

  const purchasedCategories = statistics.purchasedCategories;

  const findMaxCategories = (): PurchaseCategory => {
    let max: PurchaseCategory = purchasedCategories[0];
    purchasedCategories.map((item: PurchaseCategory) => {
      if (item.purchases > max.purchases) {
        max = item;
      }
    });
    return max;
  };

  const purchasedCategoriesLabels = purchasedCategories.map(
    (item: PurchaseCategory) => {
      return item.category;
    }
  );

  const purchasedCategoriesData = purchasedCategories.map(
    (item: PurchaseCategory) => {
      return item.purchases;
    }
  );

  const purchasedCategoriesS = {
    labels: purchasedCategoriesLabels,
    datasets: [
      {
        data: purchasedCategoriesData,
        backgroundColor: colors,
      },
    ],
  };

  const leastStock = statistics.leastStock;

  const findMinStock = (): Stock => {
    let min: Stock = leastStock[0];
    leastStock.map((item: Stock) => {
      if (item.currentStock < min.currentStock) {
        min = item;
      }
    });
    return min;
  };

  const leastStockLabels = leastStock.map((item: Stock) => {
    return item.name;
  });

  const leastStockData = leastStock.map((item: Stock) => {
    return item.currentStock;
  });

  const leastStocks = {
    labels: leastStockLabels,
    datasets: [
      {
        data: leastStockData,
        backgroundColor: colors,
      },
    ],
  };
  return (
    <>
      <Container>
        <Grid container direction="row">
          <Grid item xs={3}>
            <div
              style={{
                maxWidth: "30rem",
                maxHeight: "30rem",
                marginBottom: "120px",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginTop: "10px" }}>Least Purchases</h2>
              <Doughnut data={leastPurchases} />
            </div>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            {findMinPurchased() ? (
              <>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Product: </h4>
                  <h4 className={classes.value}>
                    <Link
                      to={{
                        pathname: `/product/${findMinPurchased().id}`,
                      }}
                      className={classes.link}
                    >
                      {findMinPurchased().name}
                    </Link>
                  </h4>
                </Typography>
                <br></br>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Purchases: </h4>
                  <h4 className={classes.value}>
                    {findMinPurchased().purchases}
                  </h4>
                </Typography>
              </>
            ) : (
              ""
            )}
          </Grid>

          <Grid item xs={3}>
            <div
              style={{
                maxWidth: "30rem",
                maxHeight: "30rem",
                marginBottom: "120px",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginTop: "10px" }}>Most Purchases</h2>
              <Doughnut data={mostPurchases} />
            </div>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            {findMaxPurchased() ? (
              <>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Product: </h4>
                  <h4 className={classes.value}>
                    <Link
                      to={{
                        pathname: `/product/${findMaxPurchased().id}`,
                      }}
                      className={classes.link}
                    >
                      {findMaxPurchased().name}
                    </Link>
                  </h4>
                </Typography>
                <br></br>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Purchases: </h4>
                  <h4 className={classes.value}>
                    {findMaxPurchased().purchases}
                  </h4>
                </Typography>
              </>
            ) : (
              ""
            )}
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item xs={3}>
            <div
              style={{
                maxWidth: "30rem",
                maxHeight: "30rem",
                marginBottom: "120px",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginTop: "10px" }}>Purchased Categories</h2>
              <Doughnut data={purchasedCategoriesS} />
            </div>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            {findMaxCategories() ? (
              <>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Category: </h4>
                  <h4 className={classes.value}>
                    {findMaxCategories().category}
                  </h4>
                </Typography>
                <br></br>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Purchases: </h4>
                  <h4 className={classes.value}>
                    {findMaxCategories().purchases}
                  </h4>
                </Typography>
              </>
            ) : (
              ""
            )}
          </Grid>

          <Grid item xs={3}>
            <div
              style={{
                maxWidth: "30rem",
                maxHeight: "30rem",
                marginBottom: "120px",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginTop: "10px" }}>Least Stock</h2>
              <Doughnut data={leastStocks} />
            </div>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            {findMinStock() ? (
              <>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Product: </h4>
                  <h4 className={classes.value}>
                    <Link
                      to={{
                        pathname: `/product/${findMinStock().id}`,
                      }}
                      className={classes.link}
                    >
                      {findMinStock().name}
                    </Link>
                  </h4>
                </Typography>
                <br></br>
                <Typography display={"inline-flex"}>
                  <h4 className={classes.label}>Purchases: </h4>
                  <h4 className={classes.value}>{findMinStock().currentStock}</h4>
                </Typography>
              </>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
