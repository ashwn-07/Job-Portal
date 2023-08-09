import { Box, Button, Grid, Link, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";

const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        console.log(API_URL)
        console.log(process.env.NODE_ENV)
       console.log("hi", process.env.REACT_APP_API_URL_DEV) 
        axios.get(`${API_URL}/viewjobs`)
            .then((response) => {
                setJobs(response.data);
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: "22px",
                        backgroundColor: "rgba(139, 158, 179, 0.50)",
                        textTransform: "none",
                        borderRadius: "15px",
                        width: "145px",
                        height: "43px",
                        padding: "0px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0)",
                        "&:hover": { backgroundColor: "rgba(0, 140, 0, 0.8)",boxShadow:"0px 8px 16px rgba(0, 0, 0, 0)" },
                    },
                },
            },
        },
    });

    return (
        <Box component="div">
            <HomeNav />

            <Box
                component="div"
                display="flex"
                justifyContent="center"
                marginTop="15px"
                bgcolor="#214154"
                height="440px"
                width={{ md: "100%" }}
            >
                <Box component="div" marginTop="50px" display=" block">
                    <Typography
                        color="white"
                        sx={{ fontFamily: "Archivo Black" }}
                        fontSize={{ xs: "28px", sm: "40px", md: "52px" }}
                        paddingLeft={{ xs: "10px", sm: "0" }}
                    >
                        Welcome to ICTAK job portal
                    </Typography>
                    <Typography
                        color="white"
                        lineHeight="1.2"
                        paddingLeft="5px"
                        fontSize={{ xs: "20px", sm: "28px", md: "32px" }}
                    >
                        Go confidently in the direction of your dreams!
                    </Typography>
                    <Box
                        display="flex"
                        width="100%"
                        justifyContent="center"
                        marginTop={{ xs: "80px", sm: "60px", md: "150px" }}
                    >
                        <ThemeProvider theme={theme}>
                          
                                {" "}
                                <Link href="/login" sx={{ color: "white", textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => sessionStorage.removeItem("JobID")}
                                >  
                                    Log In
                                   
                                </Button>
                                </Link>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Box>

            <Box
                component="div"
                display="flex"
                marginTop="15px"
                marginBottom="15px"
                bgcolor="#E7E7E7"
                padding="20px"
                width={{ md: "100%" }}
            >
                <Grid container spacing={2}>
                    {jobs.map((value, index) => (
                        <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                            <Card
                                raised
                                elevation={10}
                                sx={{
                                    
                                    position:"relative",
                                    minWidth: 40,
                                    minHeight: { sm: 400, md: 265, lg: 265 },
                                    height: "100%",
                                    borderRadius: "15px",
                                    '&:hover':{transition:"transform 0.45s", transform:"scale(1.08) translateY(-35px)", zIndex:1,}
                                   
                                }}
                            >   
                                 
                                <CardContent>
                                    <Typography
                                        fontSize="28px"
                                        lineHeight={{ xs: "1" }}
                                        fontWeight="500"
                                    >
                                        {value.jobtitle}
                                    </Typography>
                                    <Typography
                                        fontSize="22px"
                                        color="#35A29F"
                                        lineHeight={1}
                                        fontWeight="500"
                                    >
                                        {value.companyname}
                                    </Typography>
                                    <Typography
                                        fontFamily="Poppins"
                                        overflow=""
                                        fontSize="15px"
                                        paddingTop={2}
                                        lineHeight={1.3}
                                        fontWeight="500"
                                    >
                                        {value.jobdesc}
                                    </Typography>

                                    <Typography
                                        paddingTop={1}
                                        color="#806666"
                                        textTransform="uppercase"
                                        fontWeight="500"
                                    >
                                        <LocationOnIcon />
                                        {value.location}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ marginTop:"50px"}}>
                                <CardActions sx={{ position:"absolute", right:0, bottom:10}}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            marginLeft: "auto",
                                            marginBottom: "10px",
                                            marginRight: "20px",
                                            backgroundColor: "#2A8E6D",
                                            borderRadius: "12px",
                                            boxShadow:   "0px 2px 17px 2px rgba(0, 0, 0, 0.1)",
                                            "&:hover": { backgroundColor: "rgba(61,180,140, 1)", boxShadow:"none"}
                                        }}
                                        onClick={() => sessionStorage.setItem("JobID", value._id)}
                                    >
                                        <Link
                                            href="/login"
                                            sx={{ color: "white", textDecoration: "none",   }}
                                        >
                                            Log in to Apply
                                        </Link>
                                    </Button>
                                </CardActions>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
           
            {/* <Footer/> */}
        </Box>
    );
};

export default Home;
