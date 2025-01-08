import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = createTheme({
    typography: {
      fontFamily: [
        '"Kumbh Sans"',
        'serif',
      ].join(','),
    },
  });

const theme = createTheme(themeOptions);  

export default theme;