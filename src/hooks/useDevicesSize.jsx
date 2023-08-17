import { useMediaQuery, useTheme } from "@mui/material";

export const useDevicesSize = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return { isTablet, isMobile };
};
