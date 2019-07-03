import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        '&$focusVisible': {
          backgroundColor: '#FFC107'
        }
      }
    },
    MuiTouchRipple: {
      ripple: {
        color: '#FFC107'
      },
      child: {
        color: '#FFC107'
      },
      rippleVisible: {
        opacity: 0.8
      },
      '@keyframes mui-ripple-enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.8
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#512DA8',
      light: '#8559da',
      dark: '#140078'
    },
    secondary: {
      main: '#FFC107',
      light: '#fff350',
      dark: '#c79100'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "'DM Sans', sans-serif",
    h1: {
      fontFamily: "'Baloo', cursive",
      fontSize: '4rem'
    },
    h2: {
      fontFamily: "'Baloo', cursive"
    },
    h3: {
      fontFamily: "'Baloo', cursive"
    },
    h4: {
      fontFamily: "'Baloo', cursive"
    },
    h5: {
      fontFamily: "'Baloo', cursive"
    },
    h6: {
      fontFamily: "'Baloo', cursive"
    }
  }
});

export default theme;
