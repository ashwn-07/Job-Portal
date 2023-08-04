import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, styled } from "@mui/material";

const AdminNav = () => {
    const drawerWidth = 240;
    const navItems = ["Add post", "View responses", "verfiy employee"];
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const Homelinks = styled(Link)({
        fontSize: "24px",
        color: "white",
        textDecoration: "none",
        paddingRight: "20px",
        transition: "transform 1.3s",
        "&:hover": { color: "#C9DD8F", transform: "scale(1.8)" },
        "&:active": { color: "grey" },
    });

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Homelinks>
                                <ListItemText primary={item} />
                            </Homelinks>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: "#15B468" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
                        >
                            ICTAK Alumni Job Portal
                        </Typography>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Homelinks href="/addpost">Add Job</Homelinks>
                            <Homelinks href="/responsetab">Responses</Homelinks>
                          
                            <Homelinks href="/">
                                
                                <Button variant="contained" sx={{backgroundColor:"rgba(51, 212, 96, .6)", borderRadius:"2.5em", minWidth:"140px",fontSize:"16px", "&:hover":{backgroundColor:"#03C988"}}} onClick={()=>{sessionStorage.removeItem ("ad.id");sessionStorage.removeItem("usertoken")}}>Log out</Button>
                            </Homelinks>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

                <Toolbar />
            </Box>
        </>
    );
};

export default AdminNav;
