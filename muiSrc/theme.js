import { Open_Sans } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const open_Sans = Open_Sans({
  weight:['300', '400', '500', '600', '700', '800'],
  subsets:["latin"],
  display:'swap'
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#003FB9',
    },
    secondary: {
      main: '#0B3558',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: open_Sans.style.fontFamily,
  },
});

export default theme;