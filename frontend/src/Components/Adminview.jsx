import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Empview from "./Empview";

const Adminview = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:7000/api/viewjobs")
            .then((response) => {
                setJobs(response.data);
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Empview />
        </>
    );
};

export default Adminview;
