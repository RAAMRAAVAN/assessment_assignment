import { Box } from "@mui/material";
import { MobDrawerNav } from "./MobDrawerNav";
import { DeskDrawerNav } from "./DeskDrawerNav";

// DrawerNav component
export const DrawerNav = (props) => {
  // Destructure props for easier usage
  const { mobileOpen, drawerWidth, handleDrawerToggle, container } = props;
  
  // Render the drawer navigation component
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="assessment options"
    >
      {/* Render the mobile drawer navigation */}
      <MobDrawerNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} container={container} />
      
      {/* Render the desktop drawer navigation */}
      <DeskDrawerNav drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} container={container} />
    </Box>
  );
};
