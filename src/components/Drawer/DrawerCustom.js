import { AssignmentOutlined, DashboardOutlined, NoteAltOutlined, QuizOutlined, Dashboard } from "@mui/icons-material";
import { Chip, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

// DrawerCustom component
export const DrawerCustom = (props) => {
    // Destructure props
    const { mobileOpen } = props;

    // State for main and sub menu items
    const [mainMenu, setMainMenu] = useState([
        "Dashboard",
        "Assessment",
        "My Library",
    ]);
    const [subMenu, setSubMenu] = useState(["Round Status"]);

    // Function to get icon based on menu text
    const getIcon = (menu) => {
        switch (menu) {
            case "Dashboard":
                return <DashboardOutlined />;
            case "Assessment":
                return <NoteAltOutlined />;
            case "My Library":
                return <QuizOutlined />;
            case "Round Status":
                return <AssignmentOutlined />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div>
            {/* Main Menu */}
            <List>
                {mainMenu.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            style={
                                mobileOpen
                                    ? {}
                                    : { display: "flex", flexDirection: "column" }
                            }
                        >
                            <ListItemIcon
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#05056f",
                                }}
                            >
                                {getIcon(text)}
                            </ListItemIcon>
                            <ListItemText primary={text} style={{ color: "#05056f" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Divider */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                }}
            >
                <Divider style={{ border: "1px dashed #05056f", width: "80%" }} />
            </div>

            {/* Sub Menu */}
            <List>
                {subMenu.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            style={
                                mobileOpen
                                    ? {
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        justifyContent: "space-between",
                                        border: "1px black solid",
                                    }
                                    : { display: "flex", flexDirection: "column" }
                            }
                        >
                            {/* Chip */}
                            <Chip
                                label="Admin"
                                variant="outlined"
                                color="error"
                                style={{
                                    backgroundColor: "#FFCCCC",
                                    padding: "0",
                                    height: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />

                            {/* Menu item */}
                            <div
                                style={
                                    mobileOpen
                                        ? {
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }
                                        : { marginTop: "10px" }
                                }
                            >
                                <ListItemIcon
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "#05056f",
                                    }}
                                >
                                    {getIcon(text)}
                                </ListItemIcon>
                                <ListItemText primary={text} style={{ color: "#05056f" }} />
                            </div>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
