import React, { useState } from "react";
import signupsideimg from "../Img/GRA_Home-Header-Overlay.png";
import signupheaderimg from "../Img/LOGO_ICTAK-Name (1).png";
import RegisterEmp from "./RegisterEmp";
import RegisterUser from "./RegisterUser";
const SignUP = () => {

const [Selected, setSelected] = useState("alum");

const Handlechange = (e)=>{
    console.log(e)
console.log(e.target.value)
setSelected(e.target.value)
}


    return (
        <div style={{ minHeight: "100vh" }}>
            <div >
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-md-block">
                        <div className="Signup-image">
                            <img
                                className="img-fluid"
                                src={signupsideimg}
                                style={{ height: "100vh" }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4">
                        <img
                            className="img-fluid mx-auto d-block"
                            src={signupheaderimg}
                            style={{ maxHeight: "80px" }}
                        />
                        <div className="d-flex align-items-center pt-5 pb-3">
                            <h5 style={{fontFamily:'Lexend', color:"#103866"}}>&nbsp;Sign Up as :&nbsp;&nbsp;</h5>
                            <div className="container-xs">
                                {" "}
                                <select className="form-select bg-" aria-label="Default select example" value={Selected}  onChange={Handlechange}>
                                    <option value ="alum">Alumni</option>
                                    <option value="emp">Employer</option>
                                </select>
                            </div>
                        </div>

                        {(Selected==="alum")?<RegisterUser/>:<RegisterEmp />} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
