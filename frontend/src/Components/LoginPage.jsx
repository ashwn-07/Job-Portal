import React from 'react'
import Login from './Login'
import loginsideimg from '../Img/login.jpg'
const LoginPage = () => {
  return (
    <>
    <div className='h-100'>
     <div className="row mb-1 mx-0">
        <div className="col-md-6 col-xs-12">
            <img className='img-fluid' src={loginsideimg}/>
        </div>
        <div className="col-lg-4 col-xs-12" style={{position:"relative"}}>
        
        <Login/>
        
        <div style={{position:"absolute", zIndex:1, top:55, right:22}} ><div className="me-5 fs-5 fw-semibold text-primary d-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    class="bi bi-house-door-fill mt-2 text-success"
                                    viewBox="0 0 30 30"
                                    style={{ overflow: "hidden" }}
                                >
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                </svg>
                                <div
                                    className="text-success fs-6 pt-1"
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        textDecoration: "underline",
                                    }}
                                >
                                    <a href="/" className="text-success" style={{color:"#0099cc"}}>Home</a>
                    
                                </div>
                            </div></div>
        </div>
     </div>
     

  
    </div>
   
    </>
  )
}

export default LoginPage