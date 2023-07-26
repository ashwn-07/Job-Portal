import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate= useNavigate()
    const [input, setInputs] = useState({});
    const [status, setStatus] = useState(true)
    

    const inputHolder = (e) => {
        setStatus(false);
        setInputs({ ...input, [e.target.name]: e.target.value });
        console.log(input);
    }

    const shareData = (e) => {
        axios.post('http://localhost:7000/api/login', input)
            .then(response => {
                
               
                
                console.log(response);
                if (response.data.message == (" User Login successful")) {
                    const userId=response.data.data._id;
                    sessionStorage.setItem("userId",userId);
                    navigate('/alumniview');
                }
                else {
                    if (response.data.message == (" Employer Login successful")) {
                        const LogId=response.data.data._id;
                        console.log(LogId);
                        sessionStorage.setItem("LogId",LogId);
                        // alert("employer");
                        navigate('/empview');

                    } else {
                        if (response.data.message == (" Admin Login successful")) {
                            const admid = response.data.data._id;
                            sessionStorage.setItem("ad.id", admid);
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
        <div className='App-login'> <div className="container App-login">

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