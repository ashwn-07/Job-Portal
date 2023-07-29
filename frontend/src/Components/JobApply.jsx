import React, {useState} from 'react'
import axios from 'axios';
const JobApply = (props) => {
    const [file, setFile] = useState(null);
    const [link, setLink] = useState('');
    const [userId] = useState(sessionStorage.getItem("userId"));

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
           formData.append('posterid',value.posterid);
           formData.append('responderid',userId);
           axios.post("http://localhost:7000/upload", formData)
           .then((response)=>{
            //  console.log(currentDate)
            //  console.log(new Date(jobs[0].ExpiresAt))
               alert(response.data.message);
               window.location.reload(false);
           })
           .catch((error)=>{
                console.log( "the error is" , error)
               })
       
       
         }
         else if (link && value) {
           let posterid = value.posterid;
           let postid = value._id;
             
           let respdata = {
               "_id": postid,
               "responses": {
                 responsetype: "link",
                 path: link,
                 posterId: posterid,
                 responderid: userId
                }
       
             }
           console.log(respdata);
             axios.put("http://localhost:7000/api/apply", respdata)
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