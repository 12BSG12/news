import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: 'white',
          color: 'black',
          boxShadow:
            '0 1px 1px rgb(0,0,0,15%), 0 4px 7px rgb(0,0,0, 5%), 0 -1px 0 rgb(0, 0, 0, 5%), -1px 0 0 rgb(0, 0, 0, 5%), 1px 0 0 rgb(0, 0, 0, 5%)',
          ':hover': {
            backgroundColor: 'white',
            boxShadow:
            '0 1px 1px rgb(0,0,0,18%), 0 4px 7px rgb(0,0,0, 8%), 0 -1px 0 rgb(0, 0, 0, 8%), -1px 0 0 rgb(0, 0, 0, 8%), 1px 0 0 rgb(0, 0, 0, 8%)',
          },
          borderRadius: '10px'
        },
      },
    },
  },
});

export default theme;
