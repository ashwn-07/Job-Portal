import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import HeaderEmp from "./HeaderEmp";

const ResponseView = (props) => {
    const [responses, setResponses] = useState([]);
    const [adid] = useState(sessionStorage.getItem("ad.id"))

    const fetchresponse =  () => {
        const id = { _id: props.jobid };

        axios.post("http://localhost:7000/api/viewresponses", id)
            .then((response) => {
                console.log(response.data.data[0].responses);
                setResponses(response.data.data[0].responses);
                
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchresponse();
       
    }, []);
    useEffect(() => {
   console.log("heloooo",responses)
  }, [responses]);
    return (
        <>
           {(adid)?<AdminNav />:<HeaderEmp/>}

           {props.jobid}

        </>
    );
};

export default ResponseView;
