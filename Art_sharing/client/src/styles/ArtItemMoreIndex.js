import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(30),
      margin: 'auto',
      maxWidth: 1000,
      minHeight:500,
    },
    image: {
      width: 400,
      height: 300,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  
  export default useStyles;