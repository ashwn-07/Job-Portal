import React from 'react'
import '../'

const HeaderEmp = () => {
const handlelogout = ()=>{
sessionStorage.removeItem("LogId")
sessionStorage.removeItem("usertoken")
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICTAK AlumniJobPortal      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/"  onClick={handlelogout}>  Logout</a>
        <a class="nav-link" href="/addpost">  Addposts</a>
        <a class="nav-link" href="/empresview">  ViewResponses</a>
        
        
      </div>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default HeaderEmp