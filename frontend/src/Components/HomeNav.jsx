import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ictaklogo from "../Img/LOGO_ICTAK-ENG-ALT-White-Text.png";
import { Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
const HomeNav = () => {
    function ElevationScroll(props) {
        const { children } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    const drawerWidth = 240;
    const navItems = ["Home", "About", "Contact", "Employer Sign up", "Alumni Sign up"]; //empsignup //usersignup

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            height="100vh"
            sx={{ textAlign: "center", backgroundColor: "#345143" }}
        >
            <Box component="div">
                <img
                    src={ictaklogo}
                    alt="ictacademy"
                    style={{ height: "65px", width: { md: "220px" } }}
                />
            </Box>
            <Divider />
            <List sx={{ color: "white" }}>
                {navItems.map((item) => (
                    <Link href="/usersignup"> <ListItem key={item} disablePadding>
                       <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem></Link>
                ))}
            </List>
        </Box>
    );

    const Homelinks = styled(Link)({
        fontSize: "24px",
        color: "white",
        textDecoration: "none",
        paddingRight: "20px",
        transition: "transform 1.3s",
        "&:hover": { color: "#C9DD8F", transform: "scale(1.8)" },
        "&:active":{ color: "grey"}
        
    });
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll>
                    <AppBar sx={{ backgroundColor: "#15B468", height: "67px" }}>
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
                            <Box
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                            >
                                <img
                                    src={ictaklogo}
                                    alt="ictacademy"
                                    style={{ height: "65px", width: { md: "220px" } }}
                                />
                            </Box>
                            <Box columnGap="2px" sx={{ display: { xs: "none", md: "block" } }}>
                                <Homelinks href="/">Home</Homelinks>
                                <Homelinks href="/about-us">About Us</Homelinks>
                                <Homelinks href="/">Contact Us</Homelinks>
                                <Homelinks href="/empsignup">
                                    <Button
                                        sx={{
                                            backgroundColor: "#5FD68E",
                                            color: "white",
                                            borderRadius: "2rem",
                                            textTransform:'none'
                                        }}
                                    >
                                        Employer Sign Up
                                    </Button>
                                </Homelinks>
                                <Homelinks href="/usersignup" sx={{paddingRight:'0'}}>
                                    <Button
                                        sx={{
                                            backgroundColor: "#5FD68E",
                                            color: "white",
                                            borderRadius: "2rem",
                                            textTransform:'none'
                                        }}
                                            
                                    >
                                        Alumni Sign Up
                                    </Button>
                                </Homelinks>

                            
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>

                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { sm: "block", md: "none" },
                            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </React.Fragment>
            <Toolbar />
        </>
    );
};

export default HomeNav;
