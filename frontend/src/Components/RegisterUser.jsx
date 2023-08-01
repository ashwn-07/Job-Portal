import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
    const navigate= useNavigate();

    const[inputs,setInputs]=useState({});
    // FRONTEND FORM VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
    const [emailError, setEmailError] = useState('');
    const [phoneNoError, setphoneNoError] = useState('');
    const [message, setMessage] = useState('');
    

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
        // Front End Form Validation
        console.log("clicked",inputs)
        if(inputs.name==null ||inputs.regnum==null || inputs.Qualification==null || inputs.username==null || inputs.password==null){
            setTimeout(() => {
                const messageFromBackend = 'Please fill in all the fields.';
                setMessage(messageFromBackend);
                }, 100);
                setTimeout(() => {
                window.location.reload(false);
                }, 5000);
        }
      else  if (!emailRegex.test(inputs.emailid)) {
            setEmailError('Please enter a valid email address.');
            // return;
           
           if(!indianPhoneRegex.test(inputs.phone)){
            setphoneNoError('Please enter a valid phone number.');
            // return;
            }
            setTimeout(() => {
                window.location.reload(false);
                }, 2500);
           
          }
          else if (!indianPhoneRegex.test(inputs.phone)) {
            setphoneNoError('Please enter a valid phone number.');
            // return;
            setTimeout(() => {
                window.location.reload(false);
                }, 2500);
          }

        else{
        //  Action after Front End Validation
        axios.post("http://localhost:7000/api/userSignUp",inputs)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="user saved successfully"){
                alert(response.data.message);
                navigate('/');
            }
            else if(response.data.message==="Already registered") {
                alert(response.data.message);
                navigate('/login');
            } 
            else {
                alert(response.data.message);
                window.location.reload(false);
            }
            
        })
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
                            <input type="text" className="form-control" name="phone" onChange={inputHandler} />
                            <div style={{color:'red'}}>{phoneNoError}</div>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Highest Qualification</label>
                            <input type="text" className="form-control" name="Qualification" onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control" name="username" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="password" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btn-danger" onClick={submitHandler}>Register</button>
                        </div>
                        {/* <div style={{color:'red'}}>{phoneNoError}</div> */}
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