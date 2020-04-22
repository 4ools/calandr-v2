import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';

function Theme({ children }) {
  // system defined media query for dark mode if you want it on or not
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#E4572E'
          },
          secondary: {
            main: '#F3A712'
          }
        }
      }),
    [prefersDarkMode]
  );

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
