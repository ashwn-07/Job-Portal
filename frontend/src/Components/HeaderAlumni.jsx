import React from "react";
import './HeaderEmp.css'

const HeaderAlumni = () => {


  const HandleLogout = ()=>{
    const items = ["usertoken", "emailId", "userName", "userId"]

    items.forEach((item)=>{
      sessionStorage.removeItem(item)
    })
  }
  
  return (



    <div class="test">
      <nav class="navbar navbar-expand-lg bg-success navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICTAK AlumniJobPortal      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active "  aria-current="page" href="/"  onClick={HandleLogout}>  Logout</a>
      
        
      </div>
    </div>
    
  </div>
</nav>
        
    </div>


        
 
    
  )
}

export default HeaderAlumni
    
   
       
       
    
    