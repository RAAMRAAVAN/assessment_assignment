import { Clear } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { DrawerNav } from "./DrawerNav";
import { DrawerCustom } from "./DrawerCustom";

// MobDrawerNav component
export const MobDrawerNav = (props) => {
    // Destructure props for easier use
    let { mobileOpen, handleDrawerToggle, container } = props;

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "80%",
                },
            }}
        >
            {/* Drawer header with menu title and close button */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInline: "20px",
                    paddingTop: "40px",
                    size: "8px",
                }}
            >
                <div style={{ color: "#05056f" }}>Menu</div>
                <IconButton
                    edge="end"
                    aria-label="clear"
                    style={{ color: "#05056f" }}
                    onClick={handleDrawerToggle}
                >
                    <Clear style={{ width: "20px" }} />
                </IconButton>
            </div>
            
            {/* Custom drawer content */}
            <DrawerCustom mobileOpen={mobileOpen} />
        </Drawer>
    );
};
