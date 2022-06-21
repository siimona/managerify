import { Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      minHeight: "100vh",
      textAlign: "center",
    },
    photo:{
      margin: 20
    }
  })
);
