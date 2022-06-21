import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ffffff",
    },
    container: {
      justifyContent: "center",
      margin: 50,
    },
    noMargin: {
      margin: 0,
    },
    body: {
      margin: 0,
      padding: 0,
    },
    link: {
      fontWeight: "700",
      color: "black",
      fontSize: "15px",
      textDecorationLine: "underline",
    },
    searchBar: {
      marginTop: 5,
      textAlign: "left",
      marginBottom: 15,
    },
    lowStock: {
      fontWeight: "600",
      color: "red",
    },
    goodStock: {
      fontWeight: "600",
      color: "green",
    },
  })
);
