import { Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: 30,
    },
    post: {
      marginBottom: 30,
    },
    username: {
      marginBottom: 20,
    },
    header: {
      marginTop: 50,
    },
    body: {
      marginTop: 50,
      marginLeft: 10,
    },
    propertyLabel: {
      margin: 20,
      marginBottom:35
    },
    property: {
      margin: 5,
    },
    info: {
      marginBottom: 50,
    },
    popover: {
      pointerEvents: "none",
    },
    icons: {
      textAlign: "center",
      color: "black",
      minWidth: 0,
      padding: 0,
    },
    avatar: {
      textAlign: "center",
      paddingRight: 15,
    },
    image: {
      marginTop: 30,
    },
  })
);
