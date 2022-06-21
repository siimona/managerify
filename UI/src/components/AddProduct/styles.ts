import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    popover: {
      pointerEvents: 'none',
    },
    button: {
      marginTop: 50
    },
    icons: {
      textAlign: 'center',
      color: 'black',
      minWidth: 0,
      padding: 0,
    },
  }),
);
