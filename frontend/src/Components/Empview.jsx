import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderEmp from './HeaderEmp';
import Addposts from './Addposts';
import AdminNav from './AdminNav';
import AccessDenied from './AccessDenied';
import Forbidden from './Forbidden';

const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV

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
        axios.get(API_URL+"/viewjobs/"+token)

        .then((response) => setPost(response.data))

        .catch((error) => console.log(error))
    }

    const fetchPostdata=(posterid)=>{
        axios.get(API_URL+"/viewjobs/"+posterid+"/"+token)
        .then((response)=>{
            console.log(response.data);
            setPost(response.data)
        })
        .catch(error=>console.log(error))
    }
    
    const deletePost=(id)=>{
        axios.delete(API_URL+"/deletejob/"+id+"/"+token)
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
   let finaljsx=<div className=" px-4 pt-5 mb-3 pb-5" style={{minHeight:"76vh", backgroundColor:"#E7E7E7" }}>
   <div className="row">
       <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
           <div className="row g-3">
               {post.map((value,index)=>{
                 return <div key={index} className="col col-12 col-sm-12 col-md-12 col-lg-12">
                 <div class="card mb-4 shadow" style={{borderRadius:"1.5rem"}}>
                          <div class="row g-0">
                              
                              <div class="col-md-12">
                                  <div class="card-body pe-5" style={{fontFamily:"Roboto"}}>
                                      <h5 class="card-title text-success fw-bold">{value.companyname}</h5>
                                      <p class="card-text fw-bold" style={{color:'#252E27'}} >{value.jobtitle}</p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Job Description: </b><br />{value.jobdesc}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b> Job Requirements: </b><br /><p align="justify">{value.jobrequirements} </p></small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Experience: </b>{value.experience} Year  <b>&nbsp;&nbsp;&nbsp;&nbsp;Salary:</b> {value.salary} <b>&nbsp;&nbsp;&nbsp;&nbsp;Location: </b>{value.location}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><b>Posting Date: </b> {new Date(value.CreatedAt).getDate()}-{new Date(value.CreatedAt).getMonth()}-{new Date(value.CreatedAt).getFullYear()} <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Date: </b>{new Date(value.ExpiresAt).getDate()}-{new Date(value.ExpiresAt).getMonth()}-{new Date(value.ExpiresAt).getFullYear()}  </small></p>
                                      <p class="card-text"><small class="text-body-dark fs-6"><button className='btn btn-outline-danger mt-3 mb-2 fw-medium' onClick={()=>deletePost(value._id)} style={{borderWidth:"0.1rem"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg> Delete</button></small> &nbsp;
                                       <small class="text-body-secondary"><button className='btn btn-outline-primary mt-3 mb-2 fw-medium'onClick={()=>updatePost(value)} style={{borderWidth:"0.1rem"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg> Update</button></small></p>
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