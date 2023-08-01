import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate= useNavigate()
    const [input, setInputs] = useState({});
    const [status, setStatus] = useState(true)
    const [jobid]= useState(sessionStorage.getItem('JobID'))
    

    const inputHolder = (e) => {
        setStatus(false);
        setInputs({ ...input, [e.target.name]: e.target.value });
        console.log(input);
    }

    const shareData = (e) => {
        axios.post('http://localhost:7000/api/login', input)
            .then((response) => {
                
               
                
                console.log(response);
                console.log(response.data.message)
                if (response.data.message ==="Alumni Login suceesfull") {

                    
                    const userId=response.data.data._id;
                    const userName=response.data.data.name;

                    const token=response.data.token;
                    sessionStorage.setItem("usertoken",token);
        
                    const emailId=response.data.data.emailid;
                    sessionStorage.setItem("userId",userId);
                    sessionStorage.setItem("userName",userName);
                    sessionStorage.setItem("emailId",emailId);
                    if(jobid)
                    navigate(`/alumniview/#${jobid}`)
                    else
                    navigate('/alumniview')
                }
                else {
                    if (response.data.message == ("Employer Login successful")) {
                        const LogId=response.data.data._id;

                        const token=response.data.token;
                        sessionStorage.setItem("usertoken",token);

                        console.log(LogId);
                        sessionStorage.setItem("LogId",LogId);
                        // alert("employer");
                        navigate('/empview');

                    } else {
                        if (response.data.message == ("Admin Login suceesfull")) {
                            const admid = response.data.data._id;
                            sessionStorage.setItem("ad.id", admid);

                            const token=response.data.token;
                            sessionStorage.setItem("usertoken",token);

                            console.log(admid)
                            console.log(response.data)
                            alert("admin")
                            navigate('/adminview')
                            
                          

                        } else {
                            alert("unoutherised login");
                        }
                    }
                }
            })

    }


    return (
        <div className='App-login' style={{minHeight:"83vh"}}> <div className="container App-login">

            <div className="container ">

                <br /><br />

                <div className="">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12">
                            <div className="row g-3">
                                <div className="col-3">

                                    <h1 className=''> LOGIN </h1><br />
                                </div><br />
                            </div >


                            <div className="row g-3 h-100 App-login">
                                <div className="col-12 ">

                                    <label htmlFor="" className="form-label">  Username </label>
                                    <input type="text" className="form-control" name="username" onChange={inputHolder} />
                                    <br />
                                    {/* </div>
            <div className="col-8"> */}
                                    <label htmlFor="" className="form-label">  Password </label>
                                    <input type="password" name="password" id="" className="form-control" onChange={inputHolder} />
                                    {/* </div>
            <div className="col-8"> */}
                                    <br /> <br />
                                    <button className="btn btn-dark mb-5 mr-5" onClick={shareData} > LOGIN  </button>
                                </div>
                                
                            </div>
                            {/* <div className="col-4 " >
                 <h1 className='' ></h1>
            </div> */}
                        </div>



                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Login