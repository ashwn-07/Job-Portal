
import React, { useEffect, useState } from 'react'
import ictaklogo from "../Img/LOGO_ICTAK-ENG-ALT-White-Text.png"
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const [display , setDisplay] = useState("block")
    const  [token] = useState(sessionStorage.getItem("usertoken")) 

    const location = useLocation()

useEffect(()=>{

   const routes = ["/alumniview", "/adminview", "/responsetab","/empresview", "/addpost", "/empview"]

    if(routes.includes(location.pathname))
    {  
        if(!token)
        {
             setDisplay("none")
        }
    }
    
},[])





    return (
        <div style={{display:display}} id='contactus'>
        {/* */}
        <div className="container-fluid text-center" style={{ backgroundColor: '#C9C9C9',position:'absolute'}}>
        {/* to make the footer as fixed, then comment above code and uncomment below code    */}
        {/* <div classNameName="container text-center" style={{ backgroundColor: 'black', position: 'fixed', bottom: '0px' }}>
        */}
           <div className="row" style={{ padding: '15px', fontFamily:'poppins' }}>
               <div className="col col-6 col-sm-4 col-md-3 col-mg-3 col-xl-3 col-xxl-3">
                   <div className="ictaklogofooter">
                       <img className='img-fluid' style={{ maxHeight:"80px" }} src={ictaklogo} alt='no-image'></img>
                   </div>
                   {/* social media */}
                 
               </div>
               <div className="col col-6 col-sm-4 col-md-3 col-mg-3 col-xl-3 col-xxl-3">
                   G1, Ground Floor, Thejaswini, Technopark Campus
                   Thiruvananthapuram, Kerala, India - 695 581
                   Office: +91 471 270 0811
               </div>
               <div className="col col-6 col-sm-4 col-md-3 col-mg-3 col-xl-3 col-xxl-3">
                   2nd Floor, UL Cyberpark Building, Nellikode Post
                   Kozhikode, Kerala, India - 673 016
                   Office: +91 495 243 1432
               </div>
               <div className="col col-6 col-sm-4 col-md-3 col-mg-3 col-xl-3 col-xxl-3">
                   Ground Floor, Rajamally Building, Infopark
                   Koratty, Thrissur, Kerala, India - 680 308
                   Office: +91 480 273 1050
               </div>
           </div>
           <div className="row mb-4">

           <div className="socialmedia">
                       <div className="container" style={{display:'flex',gap:'25px', justifyContent:"center"}}>
                           <a href="https://www.facebook.com/ictkerala/" target="_blank" class="btn"  style={{fontSize:"22px", color:"#7B736F"}}>
                               <i className="fab fa-facebook-f"></i>
                           </a>
                           
                           <a href="https://www.youtube.com/user/ictkerala" target="_blank" class="btn"  style={{fontSize:"22px", color:"#7B736F"}}>
                               <i className="fab fa-youtube"></i>
                           </a>
                           <a href="https://www.instagram.com/ictkerala/?hl=en" target="_blank" class="btn" style={{fontSize:"22px", color:"#7B736F"}}>
                               <i className="fab fa-instagram"></i>
                           </a>
                           <a href="http://linkedin.com/company/ictkerala" target="_blank" class="btn"  style={{fontSize:"22px", color:"#7B736F"}}>
                               <i className="fab fa-linkedin"></i>
                           </a>
                       </div>
        
                   </div>
           </div>
        </div>
        </div>
    )
}

export default Footer