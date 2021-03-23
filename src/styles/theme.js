import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.7)',
        '&$shrink': {
          '&$focused': {
            color: '#59aad1',
          },
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#59aad1',
    },
    buttons: {
      action: {
        selected: '#59aad1',
        hover: 'rgba(255, 255, 255, 0.5)',
      },
    },
    text: {
      secondary: '#424242',
      main: 'rgba(255, 255, 255, 0.7)',
    },
  },
});
export default theme;
