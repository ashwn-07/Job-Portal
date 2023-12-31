import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV;

const RegisterEmp = () => {
    const[inputs,setInputs]=useState({});
    const navigate = useNavigate()
     // FRONTEND FORM VALIDATION
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
 
     const [emailError, setEmailError] = useState('');
     const [phoneNoError, setphoneNoError] = useState('');
     const [passwordError, setpasswordError] = useState('');
     const [conformpasswordError, setconformpasswordErrorr] = useState('');
     const [message, setMessage] = useState('');
     const [messageFromBackend, setmessageFromBackend] = useState('');

    const inputHandler=(e)=>{
        console.log("onchange");
        setInputs({
            ...inputs,[e.target.name]:e.target.value
        })
        console.log(inputs)
    }
    const submitHandler=()=>{
        console.log("clicked",inputs)
        if(inputs.name==null || inputs.empregnum==null || inputs.designation==null ||inputs.CompanyName==null || inputs.location==null || inputs.username==null || inputs.password==null){
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
        axios.post(API_URL+"/empsignup",inputs)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="Added Emp details Successfully"){
               
                   // alert(response.data.message);
                 const  messageFromBackend = response.data.message;
                   setmessageFromBackend(messageFromBackend);
                   setTimeout(() => {
                       navigate('/login');
                       }, 2000)
            }
            else if(response.data.message==="Employer Already registered!"){
                // alert(response.data.message)
               
               const messageFromBackend = response.data.message;
                setmessageFromBackend(messageFromBackend);
                setTimeout(() => {
                    window.location.reload(false)
                    }, 2000)
            }
            else
            {
                const messageFromBackend = response.data.message;
                setMessage(messageFromBackend);
                setTimeout(() => {
                    window.location.reload(false) ;  
                    }, 2500)
                // alert(response.data.message)
            }
           

        })
        .catch(error=>console.log(error))
     } }  
  return (
    <div>
        <div className="container" style={{minHeight:"100vh"}}>
            <div className="row">
            <div style={{color:'green'}}>{messageFromBackend}</div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"name="name" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name="emailid" onChange={inputHandler} />
                            <div style={{color:'red'}}>{emailError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Employer Code</label>
                            <input type="text" className="form-control" name="empregnum" onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" onChange={inputHandler} />
                            <div style={{color:'red'}}>{phoneNoError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Company Name</label>
                            <input type="text" className="form-control" name="CompanyName" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Designation</label>
                            <input type="text" className="form-control" name="designation" onChange={inputHandler} />
                        </div>
                      
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" name="location" onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" onChange={inputHandler}/>
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                       
                        <div style={{color:'red'}}>{message}</div>
                            <button className="btn btn-danger" style={{backgroundColor:"#1AC25D", borderColor:"#1AC25D"}} onClick={submitHandler}>Register</button>
                            
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterEmp