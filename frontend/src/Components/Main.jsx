import React, { useEffect, useState } from 'react'
import HeaderEmp from './HeaderEmp'
import AdminNav from './AdminNav'

const Main = (props) => {
  const [admin, setAdmin]= useState(false)
  const [adid] = useState(sessionStorage.getItem("ad.id"))
  
useEffect(()=>{
  if(adid)
  {
    setAdmin(true)
  }
},[])
  
  return (
    <div>
        {(admin)?<AdminNav/>:<HeaderEmp/>}

        {props.child}
    </div>
  )
}

export default Main