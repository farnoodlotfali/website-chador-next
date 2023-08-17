import { Box } from "@mui/material";

const BlankLayout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {children}
    </Box>
  );
};

export default BlankLayout;
