import React from 'react'
import Login from './Login'
import loginsideimg from '../Img/login.jpg'
const LoginPage = () => {
  return (
    <div className='h-100'>
     <div className="row mb-1 mx-0">
        <div className="col-md-6 col-xs-12">
            <img className='img-fluid' src={loginsideimg}/>
        </div>
        <div className="col-lg-4 col-xs-12">
        <Login/>
        </div>
     </div>

  
    </div>
  )
}

export default LoginPage