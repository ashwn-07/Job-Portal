import React, { useState } from 'react'


const HeaderEmp = () => {

const name = sessionStorage.getItem("userName") 

const handlelogout = ()=>{
sessionStorage.removeItem("LogId")
sessionStorage.removeItem("usertoken")
sessionStorage.removeItem("userName")
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICTAK Alumni Job Portal      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse float" id="navbarNavAltMarkup">
      <div class="navbar-nav">
     
        <a class="nav-link text-white" href="/empview">Jobs</a>
        <a class="nav-link text-white" href="/addpost">  Add posts</a>
        <a class="nav-link  text-white" href="/empresview">  View Responses</a>
        <div className="btn-group">
  <button type="button" className="btn btn-success">{name}</button>
  <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  
  <ul className="dropdown-menu position3" style={{position:"absolute", right:2, backgroundColor:"#1AC25D"}}>
    <li ><a className="dropdown-item text-white custom-hover"href="/" onClick={handlelogout} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16" color="#001C30">
  <path d="M7.5 1v7h1V1h-1z" stroke="#001C30" stroke-width="0.5"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" stroke="#001C30" stroke-width="0.5"/>
</svg> Log Out</a></li>
   
  </ul>
  
</div>
        
      </div>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default HeaderEmp