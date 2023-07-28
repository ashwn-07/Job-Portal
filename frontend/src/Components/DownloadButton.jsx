import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import FileDownload from 'js-file-download'
const DownloadButton = (props) => {

    const Handledownload = ()=>{
    const encodedpath = encodeURIComponent(props.path);
    axios.get(`http://localhost:7000/download/${encodedpath}`, {responseType:'blob'})
    .then(res=>FileDownload(res.data, "resume.pdf"))
    .catch(error=>console.log(error))
    
    }
  return (
    <Button onClick={Handledownload}> Download</Button>
  )
}

export default DownloadButton