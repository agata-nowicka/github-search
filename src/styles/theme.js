import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#222222',
    },

    primary: {
      main: '#CFCFCF',
    },
    secondary: {
      main: '#7E7E7E',
    },
  },
  text: {
    primary: '#FAFAFA',
    secondary: '#222222',
  },
});
export default theme;
