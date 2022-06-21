import { Theme } from "@mui/material";
import { fontGrid } from "@mui/material/styles/cssUtils";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: "#1976d2",
      textDecorationLine: "underline",
    },
    item: {
      marginTop: "120px",
      textAlign: "center",
    },
    label: {
      color: "gray",
      marginRight: "7px"
    },
    value: {
      color: "#1976d2",
    },
  })
);
