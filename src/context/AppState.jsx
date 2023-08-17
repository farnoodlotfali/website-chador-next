import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";
import { darkTheme, lightTheme } from "@/MUI/theme";

const AppState = ({ children }) => {
  const [mode, setMode] = useState(Cookies.get("mode") ?? "light");
  const [appTheme, setAppTheme] = useState(
    Cookies && Cookies.get("mode") === "dark" ? darkTheme : lightTheme
  );
  const [hasMounted, setHasMounted] = useState(false);

  // default inherit primary secondary transparent
  const [headerColor, setHeaderColor] = useState("primary");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    if (mode === "light") {
      setAppTheme(darkTheme);
      setMode("dark");
      Cookies.set("mode", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      setAppTheme(lightTheme);
      setMode("light");
      Cookies.set("mode", "light");
      document.body.setAttribute("data-theme", "light");
    }
  };

  if (!hasMounted) return null;

  return (
    <AppContext.Provider
      value={{ toggleTheme, appTheme, mode, headerColor, setHeaderColor }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
