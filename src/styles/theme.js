import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    buttons: {
      action: {
        selected: '#59aad1',
      },
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.7)',
      secondary: '#424242',
    },
  },
});
export default theme;
