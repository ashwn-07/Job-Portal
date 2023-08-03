import React from 'react'
import { Box, Typography } from '@mui/material'
const AccessDenied = () => {
  return (
    <Box display={{xs:"block", lg:"flex"}} alignItems="center" justifyContent="center"  width="100%" height="100vh" >
    <Box fontSize={{lg:"150px"}} color="grey"> Error 401</Box><Box fontSize="28px">Not Authenticated:<Typography variant="h4">Access Denied!</Typography></Box>
    </Box>
  )
}

export default AccessDenied