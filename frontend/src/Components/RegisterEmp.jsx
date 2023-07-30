import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterEmp = () => {
    const[inputs,setInputs]=useState({});
    const navigate = useNavigate()

    const inputHandler=(e)=>{
        console.log("onchange");
        setInputs({
            ...inputs,[e.target.name]:e.target.value
        })
        console.log(inputs)
    }
    const submitHandler=()=>{
        console.log("clicked",inputs)
        axios.post("http://localhost:7000/api/empsignup",inputs)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="Added Emp details Successfully"){
                alert(response.data.message)
                navigate('/login')
            }
            else if(response.data.message==="Employer Already registered!"){
                alert(response.data.message)
                window.location.reload(false)
            }
            else
            {
                alert(response.data.message)
            }
           

        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"name="name" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">EmailId</label>
                            <input type="text" className="form-control" name="emailid" onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">EmployerCode</label>
                            <input type="text" className="form-control" name="empregnum" onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="" className="form-label">CompanyName</label>
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterEmp