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
  })
);
