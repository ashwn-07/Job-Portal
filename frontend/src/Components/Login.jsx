import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV

const Login = () => {
    const navigate = useNavigate()
    const [input, setInputs] = useState({});
    const [status, setStatus] = useState(true)
    const [jobid] = useState(sessionStorage.getItem('JobID'))
    const [message, setMessage] = useState('');
    

    const inputHolder = (e) => {
        setStatus(false);
        setInputs({ ...input, [e.target.name]: e.target.value });
        console.log(input);

    }

    const shareData = (e) => {
        
        if (input.username == null || input.password == null ) {
            setTimeout(() => {
                const messageFromBackend = 'Please fill in all the fields.';
                setMessage(messageFromBackend);
            }, 500);
            setTimeout(() => {
                window.location.reload(false);
            }, 5000);
        } else {



            axios.post(`${API_URL}/login`, input)
                .then((response) => {



                    console.log(response);
                    console.log(response.data.message)
                    if (response.data.message === "Alumni Login suceesfull") {


                        const userId = response.data.data._id;
                        const userName = response.data.data.name;

                        const token = response.data.token;
                        sessionStorage.setItem("usertoken", token);

                        const emailId = response.data.data.emailid;
                        sessionStorage.setItem("userId", userId);
                        sessionStorage.setItem("userName", userName);
                        sessionStorage.setItem("emailId", emailId);
                        if (jobid)
                            navigate(`/alumniview/#${jobid}`)
                        else
                            navigate('/alumniview')
                    }
                    else {
                        if (response.data.message == ("Employer Login successful")) {
                            const LogId = response.data.data._id;
                            const userName = response.data.data.name;
                             console.log(userName)
                            const token = response.data.token;
                            sessionStorage.setItem("usertoken", token);

                            console.log("id is" ,LogId);
                            sessionStorage.setItem("LogId", LogId);
                            sessionStorage.setItem("userName", userName);
                            // alert("employer");
                            navigate('/empview');

                        } else {
                            if (response.data.message == ("Admin Login suceesfull")) {
                                const admid = response.data.data._id;
                                sessionStorage.setItem("ad.id", admid);

                                const token = response.data.token;
                                sessionStorage.setItem("usertoken", token);

                                console.log(admid)
                                console.log(response.data)
                                setTimeout(() => {
                                    const messageFromBackend = response.data.message;
                                    setMessage(messageFromBackend);
                                }, 10000);
                                navigate('/adminview')



                            } else {
                                setTimeout(() => {
                                    const messageFromBackend = response.data.message;
                                    setMessage(messageFromBackend);
                                }, 500);
                                setTimeout(() => {
                                    window.location.reload(false);
                                }, 5000);

                            }
                        }
                    }
                })
                .catch(error=>console.log(error))

        }
    }

      
        
           
   
 
    return (
        <div className="App-login" style={{ minHeight: "100vh" }}>
            
            <div className="container App-login">
                <div className="container">
                    <br />
                    <br />

                    <div className="">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <h1 className=""> LOGIN </h1>
                                        <br />
                                    </div>
                                       
                                    <br />
                                </div>
                                     


                                        
                                <div className="row g-3 h-100 App-login">
                                    <div className="col-12 ">
                                        <div style={{ position: "relative" }}>
                                            <label htmlFor="" className="form-label">
                                           
                                                Username
                                            </label>
                                            {/* mail icon */}
                                            <div
                                                style={{
                                                    color:  "rgba(32, 50, 57,0.65)",        //"#293A4E",
                                                    position: "absolute",
                                                    top: 43,
                                                    left: 15,
                                                    zIndex: 1,
                                                }}
                                            >
                                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="username"
                                                style={{ paddingLeft: "50px", borderWidth:"2px", borderColor:"rgba(32, 50, 57,0.4)" }}
                                                onChange={inputHolder}
                                            />
                                        </div>
                                        <br />
                                        {/* </div>
                                        <div className="col-8"> */}
                                        <div style={{ position: "relative" }}>
                                            <label htmlFor="" className="form-label">
                                                
                                                Password
                                            </label>

                                            {/* password icon */}
                                            <div
                                                style={{
                                                    color: "rgba(32, 50, 57,0.65)",
                                                    position: "absolute",
                                                    top: 42,
                                                    left: 15,
                                                    zIndex: 1,
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    class="bi bi-person-fill-lock"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                                                </svg>
                                            </div>

                                            <input
                                                type="password"
                                                name="password"
                                                id=""
                                                className="form-control form-control-lg"
                                                style={{ paddingLeft: "50px",borderWidth:"2px", borderColor:"rgba(32, 50, 57,0.4)"}}
                                                onChange={inputHolder}
                                            />
                                        </div>
                                        <br />
                                        <div style={{ color: "red" }}>{message}</div>
                                        {/* </div>
                                        <div className="col-8"> */}
                                        <br /> <br />
                                        <button
                                            className="btn btn-dark mb-5 mr-5"
                                            style={{ backgroundColor: "#293A4E" }}
                                            onClick={shareData}
                                        >
                                            {" "}
                                            LOGIN{" "}
                                        </button>
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
    );
}

export default Login