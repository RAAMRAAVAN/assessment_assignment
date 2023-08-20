import { LaptopChromebookOutlined, NotesOutlined, StayPrimaryPortrait } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"

// LeftNavBar component
export const LeftNavBar = (props) => {
  // Destructuring props
  let { drawerWidth, handleDrawerToggle } = props;
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(95% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "white",
        color: "#05056f",
        boxShadow: "none",
        left: '40px'
      }}
    >
      <Toolbar style={{ justifyContent: "space-between", padding: "0", margin: '0' }}>
        {/* Left side of the AppBar */}
        <Box style={{ display: "flex", alignItems: "center" }}>
          {/* Mobile menu toggle button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <NotesOutlined />
          </IconButton>
          {/* App title */}
          <Typography variant="h6" noWrap component="div">
            Assesment
          </Typography>
        </Box>
        
        {/* Right side of the AppBar */}
        <IconButton>
          {/* StayPrimaryPortrait icon for desktop view */}
          <StayPrimaryPortrait
            style={{ color: "#05056f" }}
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                color: "#05056f",
              },
            }}
          />
          {/* LaptopChromebookOutlined icon for mobile view */}
          <LaptopChromebookOutlined
            style={{ color: "#05056f" }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                color: "#05056f",
              },
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
