import React, {  useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AccessDenied from './AccessDenied';
import Forbidden from './Forbidden';

const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV



const Addposts = (props) => {
  const[inputs,setInputs]=useState(props.data);
  const navigate=useNavigate();
  const[token,setToken]=useState(sessionStorage.getItem("usertoken"));
  const [userID,setUserid]=useState(sessionStorage.getItem("LogId"))
  const [adid, Setadid] = useState(sessionStorage.getItem("ad.id"))


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
    axios.post(`${API_URL}/addjob/`,data)
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
    axios.put(API_URL+"/update/"+inputs._id+"/"+token,inputs)
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

let renderjsx =  <div> 
<div className="container mt-5 mb-5">
 <div className="row">
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
         <div className="row g-3 position-relative">
            
             <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
             <label htmlFor="" className="form-label fs-5 fw-medium" >Company Name</label>
             <input type="text" className="form-control" name='companyname' style={{backgroundColor:"#E7EAE7"}} value={inputs.companyname} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Job Title</label>
             <input type="text" className="form-control" name='jobtitle' style={{backgroundColor:"#E7EAE7"}} value={inputs.jobtitle} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col lg-12">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Job Description</label>
             <textarea  id="" cols="20" rows="5" className="form-control" name='jobdesc' style={{backgroundColor:"#E7EAE7"}} value={inputs.jobdesc} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col lg-12">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Job Requirements</label>
             <textarea  id="" cols="20" rows="5" className="form-control" name='jobrequirements'  style={{backgroundColor:"#E7EAE7"}} value={inputs.jobrequirements} onChange={inputHandler}/>  
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col col-lg-4">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Eligibility</label>
             <input type="text" className="form-control" name='eligibility'  style={{backgroundColor:"#E7EAE7"}} value={inputs.eligibility} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col col-lg-4">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Experience</label>
             <input type="text" className="form-control" name='experience'  style={{backgroundColor:"#E7EAE7"}} value={inputs.experience} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-12 col col-lg-4">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Salary Offered</label>
             <input type="text" className="form-control" name='salary'  style={{backgroundColor:"#E7EAE7"}} value={inputs.salary} onChange={inputHandler}/>
             </div>
             <div className="col co-12 col-sm-12 col-md-12 col col-lg-6">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Location</label>
             <input type="text" className="form-control" name='location'  style={{backgroundColor:"#E7EAE7"}} value={inputs.location} onChange={inputHandler}/>
             </div>
             
             <div className="col col-12 col-sm-12 col-md-12 col col-lg-6 mb-4">
             <label htmlFor="" className="form-label  fs-5 fw-medium">Last Date</label>
             <input type="date" className="form-control" name='ExpiresAt'  style={{backgroundColor:"#E7EAE7"}} value={inputs.ExpiresAt} onChange={inputHandler}/>
             </div>
             <div className="col col-12 col-sm-12 col-md-4 col-lg-12 bg-primary mt-5 mb-5">
                <button className="btn btn-lg position-absolute start-50 w-25  translate-middle btn-success"onClick={submitHandler} style={{maxWidth:170, fontSize:"20px"}}>Submit</button> 
                
             </div>
             
         </div>
     </div>
 </div>
</div>
</div>

 return (
      (!token)?<AccessDenied/>:((adid||userID)?renderjsx:<Forbidden/>)
      
  )
}

export default Addposts