import React, { useEffect, useState } from 'react'
import HeaderEmp from './HeaderEmp'
import AdminNav from './AdminNav'


const Main = (props) => {
  const [admin, setAdmin]= useState(false)
  const [adid] = useState(sessionStorage.getItem("ad.id"))
  const [token] = useState(sessionStorage.getItem("usertoken"))
  const [userID] = useState(sessionStorage.getItem("LogId"))
  
useEffect(()=>{
  if(adid)
  {
    setAdmin(true)
  }
},[adid])
  
  return (
    <div>
        {(token)?((adid||userID)?((adid)?<AdminNav/>:<HeaderEmp/>):null):null}

        {props.child}
    </div>
  )
}

export default Main