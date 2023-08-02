import React from "react";
import './HeaderEmp.css'

const HeaderAlumni = () => {
  
  return (



    <div>
      <nav class="navbar navbar-expand-lg bg-success navbar-dark justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICTAK AlumniJobPortal      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active "  aria-current="page" href="/"  onClick={()=>{sessionStorage.removeItem ("userId")}}>  Logout</a>
      
        
      </div>
    </div>
    
  </div>
</nav>
        
    </div>


        
 
    
  )
}

export default HeaderAlumni
    
   
       
       
    
    