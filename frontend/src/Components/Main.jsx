import React from 'react'
import HeaderEmp from './HeaderEmp'

const Main = (props) => {
  return (
    <div>
        <HeaderEmp/>
        {props.child}
    </div>
  )
}

export default Main