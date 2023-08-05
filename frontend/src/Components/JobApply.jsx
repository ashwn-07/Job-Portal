import React, {useRef, useState} from 'react'
import axios from 'axios';
import  './HeaderEmp.css'
const JobApply = (props) => {
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [userId] = useState(sessionStorage.getItem("userId"));
    const [userName]= useState(sessionStorage.getItem("userName"));
    const [emailId]= useState(sessionStorage.getItem("emailId"));
    const[token,setToken]=useState(sessionStorage.getItem("usertoken"));
    const uploadref = useRef(null)
    const [selectedfilename, setSelectedfilename] = useState("null")
    const [showname, setShowname]= useState("")
    const handleFileChange = (e) => {
          const filename = e.target.files[0].name;
        setShowname(filename)  
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };
    
      const handleLinkChange = (e) => {
        setLink(e.target.value);
        console.log(e);
      };
    const handlefileSubmit = (e,value)=>{
        console.log(value)
        e.preventDefault()
         if (file && value) {
           const formData = new FormData();
           formData.append('resume', file);
           formData.append('jobId', value._id);
           formData.append('responderid',userId);
           formData.append('username', userName);
           formData.append('emailid', emailId);
           
           axios.post("http://localhost:7000/upload/"+token, formData)
           .then((response)=>{
            if(response.data.message==="File Uploaded")
            //  console.log(currentDate)
            //  console.log(new Date(jobs[0].ExpiresAt))
              { alert(response.data.message);
               window.location.reload(false);
              }
              else{
                alert(response.data.message)
              }
           })
           .catch((error)=>{
          
                console.log( "the error is" , error)
               })
       
       
         }
         else if (link && value) {
           
           let postid = value._id;
             
           let respdata = {
               "_id": postid,
               "responses": {
                 responsetype: "link",
                 path: link,
                 responderid: userId,
                 username:userName,
                 emailid:emailId
                 }
       
             }
           console.log(respdata);
             axios.put("http://localhost:7000/api/apply/"+token, respdata)
               .then(response => {
                if(response.data.message==="Response Submitted Successfully!")
                 {console.log(response);
                  alert(response.data.message);
                  // window.location.reload(false);
                } 
                else{alert(response.data.message)}
               })
       
             
           
         } else {
           
         }
       }
        //styles applied to upload button
       const customstyle = {
        fontWeight:600,
        color:"white",
        padding:"6px",
        backgroundColor:"#4B8673",
        borderRadius:"0.3rem",
     
       }
      
  return (
    <> <form onSubmit={(e)=>handlefileSubmit(e, props.val)}>


    <div>
      <label>PDF:</label>
     <label className='ms-2 resume' style={customstyle}><input type='file' ref={uploadref} hidden name="resume" onChange={handleFileChange}/>Upload Resume</label>
     <span className='ms-3'>{showname}</span>
     </div>
    <div>
      <label>Link:</label>
      <div className="col-md-3">
      <input className='form-control'
        type="text" value={link} onChange={handleLinkChange} placeholder="Enter a link to a PDF" />
        </div>
     </div>
     <button className='btn btn-dark btn-me-md-2 mt-3' style={{backgroundColor:"#1AC25D", fontWeight:600, border:"none"}} >Submit</button>
</form>  </>
  )
}

export default JobApply