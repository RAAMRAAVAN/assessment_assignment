import { Drawer } from "@mui/material";
import { DrawerCustom } from "./DrawerCustom";

// DeskDrawerNav component
export const DeskDrawerNav = (props) => {
    // Destructure props for easier use
    let { drawerWidth, mobileOpen } = props;

    return (
        <Drawer
            variant="permanent" // Displayed as a permanent sidebar
            sx={{
                display: { xs: "none", sm: "block" }, // Visible on sm (small) screens and above
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                },
            }}
            open // Drawer is open
        >
            {/* Custom drawer content */}
            <DrawerCustom mobileOpen={mobileOpen} />
        </Drawer>
    );
};
