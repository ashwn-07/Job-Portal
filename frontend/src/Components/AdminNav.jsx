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
import ictaklogo from "../Img/LOGO_ICTAK-ENG-ALT-White-Text.png";

const AdminNav = () => {
    const drawerWidth = 240;
    const navItems = [{val:"Jobs", link:"/empview"}, {val:"Add Posts", link:"/addpost"},{ val:"Responses", link:"/responsetab"}];
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handlelogout = ()=>{
      sessionStorage.removeItem("usertoken")
      sessionStorage.removeItem("ad.id")
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);       
    }; 

    const Homelinks = styled(Link)({
        fontSize: "20px",
        fontFamily:'Poppins',
        color: "white",
        textDecoration: "none",
        paddingRight: "20px",
        transition: "transform 1.3s",
        "&:hover": { color: "#C9DD8F", transform: "scale(1.8)" },
        "&:active": { color: "grey" },
    });

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
                <Link href={item.link} sx={{color:"white", textDecoration:"none"}}> <ListItem key={item} disablePadding>
                   <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary={item.val} />
                    </ListItemButton>
                </ListItem></Link>
            ))}
             <Link href="/"  sx={{color:"white", textDecoration:"none"}}> <ListItem disablePadding>
                   <ListItemButton onClick={handlelogout} sx={{ textAlign: "center" }}>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </ListItem></Link>
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
                        <Homelinks href="/empview">Jobs</Homelinks>
                            <Homelinks href="/addpost">Add Job</Homelinks>
                            <Homelinks href="/responsetab">Responses</Homelinks>
                            <div className="btn-group">
  <button type="button" className="btn btn-success" style={{fontFamily:"Poppins"}}>Admin</button>
  <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  
  <ul className="dropdown-menu position3" style={{position:"absolute", right:2, backgroundColor:"#1AC25D"}}>
    <li ><a className="dropdown-item text-white custom-hover"href="/" onClick={handlelogout} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16" color="#001C30">
  <path d="M7.5 1v7h1V1h-1z" stroke="#001C30" stroke-width="0.5"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" stroke="#001C30" stroke-width="0.5"/>
</svg> Log Out</a></li>
   
  </ul>
  
</div>
                         
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
                            display: { xs: "block", md: "none" },
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
