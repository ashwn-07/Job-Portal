import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV;

const RegisterUser = () => {
    const navigate= useNavigate();

    const[inputs,setInputs]=useState({});
    // FRONTEND FORM VALIDATION
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;                        ///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const [emailError, setEmailError] = useState('');
    const [phoneNoError, setphoneNoError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [conformpasswordError, setconformpasswordErrorr] = useState('');
    const [message, setMessage] = useState('');
    const [messageFromBackend, setmessageFromBackend] = useState('');
    

    //   INPUT HANDLER
    const inputHandler=(e)=>{
        console.log("onchange");
        setInputs({
            ...inputs,[e.target.name]:e.target.value
           })
        console.log(inputs)
    }

   
    // FORM SUBMIT
    const submitHandler=()=>{
        // Front End Form Validation ;
        console.log("clicked",inputs)
        // empty inputs
        if(inputs.name==null ||inputs.regnum==null || inputs.Qualification==null || inputs.username==null || inputs.password==null){
            setTimeout(() => {
                const messageDisplay = 'Please fill in all the fields.';
                setMessage(messageDisplay);
            }, 1000);
            setTimeout(() => {
                const messageDisplay = '';
                setMessage(messageDisplay);
            }, 5000);
                
        }
            // email id Checking
      else  if (!emailRegex.test(inputs.emailid)) {
                 setEmailError('Please enter a valid email address.');
                 setTimeout(() => {
                 setEmailError("");
               }, 5000);
            }
        //  Phone number Checkin
          else if(!indianPhoneRegex.test(inputs.phone)){
                 setphoneNoError('Please enter a valid phone number.');
                 setTimeout(() => {
                 setphoneNoError("");
               }, 5000);
           
            }   
        //   Password Checking
          else if (!passwordRegex.test(inputs.password)) {
                 setpasswordError('Password should  be atleast 6 characters with an uppercase, a lower case, a letter, a digit and a special character  ');
                 setTimeout(() => {
                 setpasswordError("");
                }, 5000);
         
            }
        // Conform Password
            else if(inputs.password!=inputs.conformpassword){
                setconformpasswordErrorr("Password doesn't match");
                setTimeout(() => {
                    setconformpasswordErrorr("");
                }, 5000);

            }
        else {
        //  Action after Front End Validation
        axios.post( API_URL+"/userSignUp",inputs)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="user saved successfully"){
                // alert(response.data.message);
                const messageFromBackend = response.data.message;
                setmessageFromBackend(messageFromBackend);
                setTimeout(() => {
                    navigate('/');
                    }, 2000);
               
            }
            else if(response.data.message==="Username already taken, choose another username"){

                const messageFromBackend = response.data.message;
                setMessage(messageFromBackend);
                setTimeout(() => {
                    setMessage('');
                    }, 5000);
            }

            else if(response.data.message==="Already registered") {
                // alert(response.data.message);
                const messageFromBackend = response.data.message;
                setmessageFromBackend(messageFromBackend);
                setTimeout(() => {
                    navigate('/login');
                    }, 2000);
               
            } 
             
            

            else if(response.data.message==="Sorry!!! Not a Student of ICTAK, Kerala") {
                const messageFromBackend = response.data.message;
                setmessageFromBackend(messageFromBackend);
               
                
            }
            
           
        })
        .catch(error=>console.log(error))
    } 
}        

  return (
    <div>
        <div className="container" style={{minHeight:"83vh"}}>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"name="name" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Register Number</label>
                            <input type="text" className="form-control"name="regnum" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">EmailId</label>
                            <input type="text" className="form-control" name="emailid" onChange={inputHandler} />
                            <div style={{color:'red'}}>{emailError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone"  onChange={inputHandler} />
                            <div style={{color:'red'}}>{phoneNoError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Highest Qualification</label>
                            <input type="text" className="form-control" name="Qualification" onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username"  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={inputHandler}/>
                             <div style={{color:'red'}}>{passwordError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="conformpassword" onChange={inputHandler}/>
                             <div style={{color:'red'}}>{conformpasswordError}</div>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btn-dark" style={{backgroundColor:"#1AC25D", border:"none"}} onClick={submitHandler}>Register</button>
                        </div>
                        <div style={{color:'green'}}>{messageFromBackend}</div>
                        <div style={{color:'red'}}>{message}</div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default RegisterUser