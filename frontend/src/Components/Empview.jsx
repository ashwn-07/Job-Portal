import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Empview = () => {
    const[post,setPost]=useState([]);
    const [userID,setUserid]=useState(sessionStorage.getItem("LogId"))


    const fetchPostdata=(posterid)=>{
        axios.get("http://localhost:7000/jobs/viewjobs/"+posterid)
        .then((response)=>{
            console.log(response.data);
            setPost(response.data)
        })
    }
   

    useEffect(()=>{
        fetchPostdata(userID);
    },[])
   
  return (
   <div>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row g-3">
                {post.map((value,index)=>{
                  return <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                  <div class="card mb-3">
                           <div class="row g-0">
                               
                               <div class="col-md-8">
                                   <div class="card-body">
                                       <h5 class="card-title">{value.companyname}</h5>
                                       <p class="card-text">{value.jobtitle}</p>
                                       <p class="card-text"><small class="text-body-secondary"><b>JobDescription:{value.jobdesc}  </b></small></p>
                                       <p class="card-text"><small class="text-body-secondary"><b> JobRequirements:{value.jobrequirements} </b></small></p>
                                       <p class="card-text"><small class="text-body-secondary"><b>Experience:{value.experience}, Salry:{value.salary},  Location:{value.location}  </b></small></p>
                                       <p class="card-text"><small class="text-body-secondary"><b>PostingDate:{value.CreatedAt},LastDate:{value.ExpiresAt}  </b></small></p>
                                       <p class="card-text"><small class="text-body-secondary"><button className='btn btn-danger' >Delete</button></small> &nbsp;
                                        <small class="text-body-secondary"><button className='btn btn-primary'>Update</button></small></p>
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
   </div>
  )
}

export default Empview