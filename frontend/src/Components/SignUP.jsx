import React, { useState } from "react";
import signupsideimg from "../Img/GRA_Home-Header-Overlay.png";
import signupheaderimg from "../Img/LOGO_ICTAK-Name (1).png";
import RegisterEmp from "./RegisterEmp";
import RegisterUser from "./RegisterUser";
const SignUP = () => {
    const [Selected, setSelected] = useState("alum");

    const Handlechange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div style={{ minHeight: "100vh",backgroundColor:"#ebeff2" }}>
            <div>
                <div className="row mx-0">
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-md-block">
                        <div className="Signup-image">
                            <img
                                className="img-fluid"
                                src={signupsideimg}
                                style={{ height: "100vh" }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4" >
                        <img
                            className="img-fluid mx-auto d-block"
                            src={signupheaderimg}
                            style={{ maxHeight: "80px" }}
                        />
                        <div className="d-flex align-items-center justify-content-between pt-5 pb-3">
                            <div className="d-flex">
                                <h5 style={{ fontFamily: "Lexend", color: "#103866" }}>
                                    &nbsp;Sign Up as :&nbsp;&nbsp;
                                </h5>
                                
                                <div className="container-xs">
                                    <select
                                        className="form-select bg-"
                                        aria-label="Default select example"
                                        value={Selected}
                                        onChange={Handlechange}
                                    >
                                        <option value="alum">Alumni</option>
                                        <option value="emp">Employer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="me-5 fs-5 fw-semibold text-primary d-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    class="bi bi-house-door-fill mt-2 text-success"
                                    viewBox="0 0 30 30"
                                    style={{ overflow: "hidden" }}
                                >
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                </svg>
                                <div
                                    className="text-success fs-6 pt-1"
                                    style={{
                                        position: "absolute",
                                        right: 32,
                                        textDecoration: "underline",
                                    }}
                                >
                                    <a href="/" className="text-success" style={{color:"#0099cc"}}>Home</a>
                    
                                </div>
                            </div>
                            
                        </div>

                        {Selected === "alum" ? <RegisterUser /> : <RegisterEmp />}
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
