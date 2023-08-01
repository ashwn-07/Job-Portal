import React, {useState} from 'react'
import axios from 'axios';
const JobApply = (props) => {
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [userId] = useState(sessionStorage.getItem("userId"));
    const [userName]= useState(sessionStorage.getItem("userName"));
    const [emailId]= useState(sessionStorage.getItem("emailId"));
    const[token,setToken]=useState(sessionStorage.getItem("usertoken"));

    const handleFileChange = (e) => {
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
      
  return (
    <> <form onSubmit={(e)=>handlefileSubmit(e, props.val)} >
    <div>
      <label>PDF:</label>
      <input type='file' name="resume" onChange={handleFileChange}    />
     
    </div>
    <div>
      <label>Link:</label>
      <input
        type="text" value={link} onChange={handleLinkChange} placeholder="Enter a link to a PDF" />
     </div>
     <button className='btn btn-dark btn-me-md-2' >Submit</button>
</form>  </>
  )
}

export default JobApply