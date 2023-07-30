import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addposts = (props) => {
  const[inputs,setInputs]=useState(props.data);
  const navigate=useNavigate();
  const[token,setToken]=useState(sessionStorage.getItem("usertoken"));
  const [userID,setUserid]=useState(sessionStorage.getItem("LogId"))
  const inputHandler=(e)=>{
    console.log("onchange");
    const{name,value}=e.target;
    setInputs({
        ...inputs,[name]:value
       
    })
    console.log(inputs)
  }

  const submitHandler = () =>{
    let data={
        token:token,
        posterid:userID,
        companyname:inputs.companyname,
        jobtitle:inputs.jobtitle,
        jobdesc:inputs.jobdesc,
        jobrequirements:inputs.jobrequirements,
        eligibility:inputs.eligibility,
        experience:inputs.experience,
        salary:inputs.salary,
        location:inputs.location,
        CreatedAt:Date.now,
        ExpiresAt:inputs.ExpiresAt

    }
    if(props.method==="post"){
   
    console.log("clicked",inputs)
    axios.post("http://localhost:7000/api/addjob",data)
    .then((response)=>{
      if(response.data.message==="Job added sucessfully!!"){
        alert(response.data.message)
        navigate('/empview')
      }
      else{
        alert(response.data.message)
      }
    })
    .catch(err=>console.log(err));
  }
if(props.method==="put"){
    axios.put("http://localhost:7000/api/update/"+inputs._id,inputs)
    .then((response)=>{
        if(response.data.message==="Job Details Updated Successfully"){
            alert(response.data.message)
            window.location.reload(false)
        }else{
            alert("not updated")
        }
    })
}
}
    return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row g-3">
                   
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">CompanyName</label>
                    <input type="text" className="form-control" name='companyname' value={inputs.companyname} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobTitle</label>
                    <input type="text" className="form-control" name='jobtitle' value={inputs.jobtitle} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobDescription</label>
                    <textarea  id="" cols="20" rows="5" className="form-control" name='jobdesc' value={inputs.jobdesc} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">JobRequirements</label>
                    <textarea  id="" cols="20" rows="5" className="form-control" name='jobrequirements' value={inputs.jobrequirements} onChange={inputHandler}/>  
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Eligibility</label>
                    <input type="text" className="form-control" name='eligibility' value={inputs.eligibility} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Experience</label>
                    <input type="text" className="form-control" name='experience' value={inputs.experience} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">SalaryOffered</label>
                    <input type="text" className="form-control" name='salary'value={inputs.salary} onChange={inputHandler}/>
                    </div>
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" className="form-control" name='location' value={inputs.location} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col co-12 col-sm-12 col-md-12 col lg-12">
                    <label htmlFor="" className="form-label">LastDate</label>
                    <input type="date" className="form-control" name='ExpiresAt' value={inputs.ExpiresAt} onChange={inputHandler}/>
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