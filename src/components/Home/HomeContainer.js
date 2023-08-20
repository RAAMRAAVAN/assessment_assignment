import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import AssessmentsPage from "../MyAssessments/AssessmentsPage";
import { LeftNavBar } from "../LeftNavBar/LeftNavBar";
import { DrawerNav } from "../Drawer/DrawerNav";

// Define the width of the drawer for the navigation menu
const drawerWidth = 240;

function HomeContainer(props) {
  // Determine if the current view is in mobile mode based on screen width
  const isMobileView = useMediaQuery('(max-width:600px)');
  
  const { window } = props;
  
  // State to manage the mobile drawer open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle function for opening/closing the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Set the container for the mobile drawer (if available)
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "lightgray" }}>
      <CssBaseline />

      {/* Left navigation bar */}
      <LeftNavBar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />

      {/* Mobile drawer for navigation */}
      <DrawerNav mobileOpen={mobileOpen} drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} container={container} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "white",
          width: { sm: `calc(99% - ${drawerWidth}px)` },
        }}
        style={isMobileView ? {} : {
          marginLeft: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* Render the AssessmentsPage component */}
          <div style={{ marginTop: "50px" }}><AssessmentsPage /></div>
        </Box>
      </Box>
    </Box>
  );
}

// Prop validation for the window property
HomeContainer.propTypes = {
  window: PropTypes.func,
};

export default HomeContainer;
