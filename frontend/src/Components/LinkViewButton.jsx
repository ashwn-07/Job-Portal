import { Button, Link } from '@mui/material'
import React from 'react'

const LinkViewButton = (props) => {
  return (
    <Link href={props.path}><Button variant='contained' color='success'>VIEW</Button></Link>
  )
}

export default LinkViewButton