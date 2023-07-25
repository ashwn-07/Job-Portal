import React from 'react'
import AdminNav from './AdminNav'

const AdminMain = (props) => {
  return (
  <>
  <AdminNav/>
  {props.child}
  </>
  )
}

export default AdminMain