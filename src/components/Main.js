import React, { createContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import RoutesIndex from "./Routes";
const THEME = createTheme({
  typography: {
    fontFamily: "effra, serif",
    fontSize: "18px",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
  },
});
export const UserContext = createContext();

const Main = () => {
    const location = useLocation();
  return (
    <ThemeProvider theme={THEME}>
        <UserContext.Provider>
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          
        }}
      >
        {location.pathname !== "/" ? <Sidebar /> : <RoutesIndex />}
      </Box>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
