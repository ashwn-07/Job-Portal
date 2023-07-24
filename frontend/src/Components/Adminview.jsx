import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Empview from "./Empview";

const Adminview = () => {

    const [jobs, setJobs] = useState([])



    useEffect(()=>{

        axios.get("http://localhost:7000/api/viewjobs")
        .then((response) => {
          setJobs(response.data);
      })

      .catch((error) => {
          console.log(error);
      });
    },[])
    


    return (
      <>
      <AdminNav/>
      {/* <Grid container spacing={2} p={4}>
                    {jobs.map((value, index) => (
                        <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                            <Card
                                raised
                                elevation={10}
                                sx={{
                                    minWidth: 40,
                                    minHeight: { sm: 400, md: 265, lg: 265 },
                                    height: "100%",
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
                                            backgroundColor:"#E11D1D",
                                            borderRadius: "12px",
                                            boxShadow: "0px 2px 17px 2px rgba(0, 0, 0, 0.25)",
                                            '&:hover':{backgroundColor:"#B82727"}
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            marginLeft: "auto",
                                            marginBottom: "10px",
                                            marginRight: "20px",
                                            backgroundColor:"#E11D1D",
                                            borderRadius: "12px",
                                            boxShadow: "0px 2px 17px 2px rgba(0, 0, 0, 0.25)",
                                            '&:hover':{backgroundColor:"#B82727"}
                                        }}
                                    >
                                        DELETE
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid> */}

                <Empview/>
                
      </>
    );

   
};

export default Adminview;
