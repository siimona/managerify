import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#ffffff',
    },
    logoButton: {
      width: `100px`,
      marginLeft: 10,
    },
    toolBar: {
      padding: 0,
    },
    navbar:{
      marginTop:90
    },
    image: {
      textAlign: 'center',
      marginTop: 5,
    },
    icons: {
      textAlign: 'center',
      color: 'black',
      minWidth: 0,
      paddingTop: 8,
    },
    iconsMenu: {
      textAlign: 'center',
      color: 'black',
      textDecorationLine: 'none',
      padding: 7,
    },
    smallMenu:{
      top: 50,
      left: 50,
    },
    logout:{
      borderTop: 'groove',
    },
    box:{
      zIndex: 10,
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingTop:0,
    },
    hide:{
      display:'none',
    },
    list:{
      paddingTop:0,
      position: 'absolute',
      top: 30,
      left: 230,
      zIndex: 10,
      borderRadius: 5,
    },
    name: {
      color: 'black',
    },
    avatar:{
      width:25,
      height:25,
    }
  }),
);
