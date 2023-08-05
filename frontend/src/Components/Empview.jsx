import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderEmp from './HeaderEmp';
import Addposts from './Addposts';
import AdminNav from './AdminNav';
import AccessDenied from './AccessDenied';
import Forbidden from './Forbidden';


const Empview = () => {
   
    const[post,setPost]=useState([]);
    const[update,setUpdate]=useState(false)
    const[singlevalue,setSingleValue]=useState([]);
    const [userID,setUserid]=useState(sessionStorage.getItem("LogId"))
    const [adid] = useState(sessionStorage.getItem("ad.id"))
    const[token,setToken]=useState(sessionStorage.getItem("usertoken"));
    
    const[adminview, setAdminview] = useState(false)
    console.log(userID)

    const fetchAdminposts =()=>{
        axios.get("http://localhost:7000/api/viewjobs/"+token)

        .then((response) => setPost(response.data))

        .catch((error) => console.log(error))
    }

    const fetchPostdata=(posterid)=>{
        axios.get("http://localhost:7000/api/viewjobs/"+posterid+"/"+token)
        .then((response)=>{
            console.log(response.data);
            setPost(response.data)
        })
        .catch(error=>console.log(error))
    }
    
    const deletePost=(id)=>{
        axios.delete("http://localhost:7000/api/deletejob/"+id+"/"+token)
        .then((response)=>{
            if(response.data.message==="Job deleted Successfully"){
                alert(response.data.message);
                window.location.reload(false)
            }
        })
        .catch(err=>console.log(err))
    }

    const updatePost=(val)=>{
        console.log("update",val)
        setUpdate(true)
        setSingleValue(val);
    }
   

    useEffect(()=>{
        console.log(post)
          
        if(adid){

            setAdminview(true)
            fetchAdminposts();
            
        }
        else{

            fetchPostdata(userID);
        }
            
        
    },[])
   let finaljsx=<div className=" px-5 pt-3 mb-3 pb-5" style={{minHeight:"76vh", backgroundColor:"#E7E7E7",  fontFamily:'Poppins' }}>
   <div className="row">
       <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
           <div className="row g-3">
               {post.map((value,index)=>{
                 return <div key={index} className="col col-12 col-sm-6 col-md-6 col-lg-6">
                 <div class="card mb-5 h-100 mt-5 shadow" style={{borderRadius:"1.5rem"}}>
                          <div class="row g-0">
                              
                              <div class="col-md-12">
                                  <div class="card-body">
                                      <h5 class="card-title text-success fw-bold">{value.companyname}</h5>
                                      <p class="card-text fw-bold" style={{color:'#252E27'}} >{value.jobtitle}</p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Job Description: </b>{value.jobdesc}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b> Job Requirements: </b>{value.jobrequirements} </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Experience: </b>{value.experience} Year  <b>&nbsp;&nbsp;&nbsp;&nbsp;Salary:</b> {value.salary} <b>&nbsp;&nbsp;&nbsp;&nbsp;Location: </b>{value.location}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Posting Date: </b> {new Date(value.CreatedAt).getDate()}-{new Date(value.CreatedAt).getMonth()}-{new Date(value.CreatedAt).getFullYear()} <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Date: </b>{new Date(value.ExpiresAt).getDate()}-{new Date(value.ExpiresAt).getMonth()}-{new Date(value.ExpiresAt).getFullYear()}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><button className='btn btn-danger' onClick={()=>deletePost(value._id)}>Delete</button></small> &nbsp;
                                       <small class="text-body-secondary"><button className='btn btn-primary'onClick={()=>updatePost(value)}>Update</button></small></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                 </div>
               })}
               <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
           </div>
       </div>
   </div>
</div>
if(update) finaljsx =<Addposts method='put' data={singlevalue}/>
  return (
   <div>
      {(!token)?<AccessDenied/>:((adid||userID)?finaljsx:<Forbidden/>)}
      
   </div>
  )
}

export default Empview