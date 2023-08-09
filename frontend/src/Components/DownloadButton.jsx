import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import FileDownload from 'js-file-download'

const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV
const DownloadButton = (props) => {

    const Handledownload = ()=>{
    const encodedpath = encodeURIComponent(props.path);
    axios.get(`${API_URL}/download/${encodedpath}`, {responseType:'blob'})
    .then(res=>FileDownload(res.data, "resume.pdf"))
    .catch(error=>console.log(error))
    
    }
  return (
    <Button onClick={Handledownload}> Download</Button>
  )
}

export default DownloadButton