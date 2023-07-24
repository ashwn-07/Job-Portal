import { Box, Button, Grid, Link, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/api/viewjobs").then((response) => {
            setJobs(response.data);
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

                        width: "140px",

                        padding: "0px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                        "&:hover": { backgroundColor: "rgba(0, 140, 0, 0.7)" },
                    },
                },
            },
        },
    });

    return (
        <Box>
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
                        Find and land your dream job in here
                    </Typography>
                    <Box
                        display="flex"
                        width="100%"
                        justifyContent="center"
                        marginTop={{ xs: "80px", sm: "60px", md: "150px" }}
                    >
                        <ThemeProvider theme={theme}>
                            <Button variant="contained">
                                {" "}
                                <Link href="/login" sx={{ color: "white", textDecoration: "none" }}>
                                    Log In
                                </Link>
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Box>

            <Box
                component="div"
                display="flex"
                marginTop="15px"
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
                                    minWidth: 40,
                                    minHeight: { sm: 400, md: 265, lg: 265 },
                                    maxHeight: { sm: 400, md: 265, lg: 265 },
                                    borderRadius: "15px",
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
                                        {value.loctaion}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            marginLeft: "auto",
                                            marginBottom: "10px",
                                            marginRight: "20px",
                                            backgroundColor: "#2A8E6D",
                                            borderRadius: "12px",
                                            boxShadow: "0px 2px 17px 2px rgba(0, 0, 0, 0.25)",
                                        }}
                                    >
                                        <Link
                                            href="/login"
                                            sx={{ color: "white", textDecoration: "none" }}
                                        >
                                            Login to Apply
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
