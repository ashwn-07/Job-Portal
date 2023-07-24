import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addposts = () => {
  const[inputs,setInputs]=useState({});
  const navigate=useNavigate();
  const [userID,setUserid]=useState(sessionStorage.getItem("LogId"))
  const inputHandler=(e)=>{
    console.log("onchange");
    setInputs({
        ...inputs,[e.target.name]:e.target.value
       
    })
    console.log(inputs)
  }

  const submitHandler = () =>{
    let data={
        posterid:userID,
        companyname:inputs.companyname,
        jobtitle:inputs.jobtitle,
        jobdesc:inputs.jobdesc,
        jobrequirements:inputs.jobrequirements,
        eligibility:inputs.eligibility,
        experience:inputs.experience,
        salary:inputs.salary,
        loctaion:inputs.loctaion,
        CreatedAt:Date.now,
        ExpiresAt:inputs.ExpiresAt

    }
    console.log("clicked",inputs)
    axios.post("http://localhost:7000/api/addjob",data)
    .then((response)=>{
      if(response.data.message==="Job added sucessfully!!"){
        alert(response.data.message)
        navigate('/empview')
      }
    })
    .catch(err=>console.log(err));
  }
    return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row g-3">
                   
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">CompanyName</label>
                    <input type="text" className="form-control" name='companyname' onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobTitle</label>
                    <input type="text" className="form-control" name='jobtitle' onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobDescription</label>
                    <textarea  id="" cols="20" rows="5" className="form-control" name='jobdesc' onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobRequirements</label>
                    <textarea  id="" cols="20" rows="5" className="form-control" name='jobrequirements' onChange={inputHandler}/>  
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Eligibility</label>
                    <input type="text" className="form-control" name='eligibility' onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Experience</label>
                    <input type="text" className="form-control" name='experience' onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">SalaryOffered</label>
                    <input type="text" className="form-control" name='salary'onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" className="form-control" name='loctaion'onChange={inputHandler}/>
                    </div>
                    
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">LastDate</label>
                    <input type="text" className="form-control" name='ExpiresAt'onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                       <button className="btn btn-success"onClick={submitHandler}>Submit</button> 
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12"></div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Addposts