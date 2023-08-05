import React from 'react'


const HeaderEmp = () => {
const handlelogout = ()=>{
sessionStorage.removeItem("LogId")
sessionStorage.removeItem("usertoken")
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
        <a class="nav-link text-white" aria-current="page" href="/"  onClick={handlelogout}>  Log Out</a>
        <a class="nav-link text-white" href="/addpost">  Add posts</a>
        <a class="nav-link  text-white" href="/empresview">  View Responses</a>
        
        
      </div>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default HeaderEmp