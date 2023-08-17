import { CssBaseline, ThemeProvider } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { useContext } from "react";

import { AppContext } from "@/context/AppContext";

const MuiThemeProvider = ({ children }) => {
  const { appTheme } = useContext(AppContext);

  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
