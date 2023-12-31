import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';
import { alignPropType } from 'react-bootstrap/esm/types';
import JobApply from './JobApply';
import { useLocation } from "react-router-dom";
import HeaderAlumni from './HeaderAlumni';
import AccessDenied from './AccessDenied'

const API_URL = process.env.NODE_ENV === "production"?process.env.REACT_APP_API_URL_PROD:process.env.REACT_APP_API_URL_DEV

const Alumniview = () => {
  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const [userId] = useState(sessionStorage.getItem("userId"));
  const [userName]= useState(sessionStorage.getItem("userName"));
  const [emailId]= useState(sessionStorage.getItem("emailId"));
  const[token,setToken]=useState(sessionStorage.getItem("usertoken"));
  const [profiledata, setProfiledata] = useState([])
  const [profbutton, setProfbutton] = useState('Create Profile')
  const [profheading, setProfheading] = useState('Create Profile')
  const [btndisplay, setBtndisplay] = useState('block')

   // FRONTEND FORM VALIDATION
   const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
   const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;

   const [emailError, setEmailError] = useState('');
   const [phoneNoError, setphoneNoError] = useState('');
   const [message, setMessage] = useState('');

  
  const [currentDate, setCurrentDate]   = useState(new Date())
  const [load, setLoad] = useState(false)
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputholder = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
   
    console.log(data);
   
    
  }   
  //getting the jobs 
  useEffect( () => {
    console.log(token)
    axios.post(`${API_URL}/checkprofile/${userId}`)
    .then((response)=>{
      if(response.data.message==="profile already created")
      {
              setProfiledata(response.data.data.prof)
              setProfbutton('View Profile')
              setProfheading('My Profile')
              setBtndisplay('none')
              // console.log("the data is", profiledata)

      }
    })
    .catch((error)=>console.log(error))


     axios.get(`${API_URL}/viewjobs`).then((response) => {
      setCurrentDate(new Date())
      setJobs(response.data);
      setLoad(true)


       
    })
    .catch((error)=>console.log(error))
  }, []);

//navigate to the job that was clicked
useEffect(()=>{


  if(location.hash)

  {
    const cardId = location.hash.slice(1);

   
    const targetCard = document.getElementById(cardId);

   
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

},[load])

  const shareData = () => {
    
    let newdata={
      "data":data,
      "alumniId":userId,
      "emailId":emailId,
      "userName":userName
    }
    // email check
    console.log(newdata.data.emailid)
    if (!emailRegex.test(newdata.data.emailid)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => {
      setEmailError("");
    }, 5000);
   }
    //  Phone number Checkin
    else if(!indianPhoneRegex.test(newdata.data.phone)){
      setphoneNoError('Please enter a valid phone number.');
      setTimeout(() => {
      setphoneNoError("");
    }, 5000);

 }   
 else  if(newdata.data.name==null ||newdata.data.Qualification==null || newdata.data.course==null || newdata.data.batch==null || newdata.data.placement==null ){
  setTimeout(() => {
      const messageDisplay = 'Please fill in all the fields.';
      setMessage(messageDisplay);
  }, 1000);
  setTimeout(() => {
      const messageDisplay = '';
      setMessage(messageDisplay);
  }, 5000);
      
}
    
    else{
         axios.post(`${API_URL}/studendProfile`, newdata )
    
      .then(response => {
        
        alert(response.data.message);
        window.location.reload(false);
      })
    }
  }

//"#214144" 

  let renderjsx =  <div style={{ backgroundColor:"rgba(95, 115, 154, 0.20)" , fontFamily:"Roboto"}}>
  <>
    <div style={{position:"relative",}} >
      <HeaderAlumni/>
      {/* profile */}
      <Button variant="success" onClick={handleShow} className=' mt-5' style={{marginLeft:"52px"}}>
        {profbutton}
      </Button>
      {/*  #15B468 */}
      <Offcanvas show={show} placement={"end"} onHide={handleClose} className="mt-5" style={{backgroundColor:"#58B99C", borderRadius:"0.5rem"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  className='text-white' >{profheading}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control size="sm" type="text" name='name' value={profiledata.name} onChange={inputholder} placeholder="Name"  style={{backgroundColor:"white"}} />

            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" size="sm" name='emailid' value={profiledata.emailid} onChange={inputholder} placeholder="name@example.com" />
              <div style={{color:'red'}}>{emailError}</div>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control type="text" name='phone' onChange={inputholder} value={profiledata.phone} placeholder="Phone Number" />
              <div style={{color:'red'}}>{phoneNoError}</div>
            </FloatingLabel> <FloatingLabel
              controlId="floatingInput"
              label="Highest Qualification"
              className="mb-3"
            >
              <Form.Control type="text" name='Qualification' value={profiledata.Qualification} onChange={inputholder} placeholder="Highest Qualification"  style={{backgroundColor:"white"}} />

            </FloatingLabel>


            <Form.Select name='course' value={profiledata.course} onChange={inputholder} aria-label="Default select example" style={{backgroundColor:"white"}}>


              <option value=''>Course studied at ICTAK</option>

              <option value="FSD" >FSD</option>
              <option value="DSA">DSA</option>
              <option value="ML-AI">ML-AI</option>
              <option value="RPA">RPA</option>
              <option value="ST">ST</option>
              <option value="CSA">CSA</option>
            </Form.Select> <br />

            <Form.Select name='batch' onChange={inputholder}  value={profiledata.batch} aria-label="Default select example"  style={{backgroundColor:"white"}}>
              <option value="">Batch Details</option>
              <option value="KKEM">KKEM</option>
              <option value="NORKA">NORKA</option>
              <option value="KDISC">KDISC</option>
            </Form.Select> <br />

            <Form.Select name='placement'  value={profiledata.placement} onChange={inputholder} aria-label="Default select example"  style={{backgroundColor:"white"}}>
              <option value="">Placement Status</option>
              <option value="Placed">Placed</option>
              <option value="Job Seeking">Job Seeking</option>

            </Form.Select> <br />
            <FloatingLabel controlId="floatingPassword" label="Company Name (If placed)">
              <Form.Control type="text" name='company' onChange={inputholder} placeholder="Company Name"  style={{backgroundColor:"white"}} />
            </FloatingLabel><br />
            <div style={{color:'red'}}>{message}</div><br></br>
            <Button variant="outline-success" style={{display:btndisplay}}  onClick={shareData} >Submit</Button>{' '}
          </>
        </Offcanvas.Body>
      </Offcanvas>
    </div>

    {/* cards */}
    <div className='m-3 pr-3'>
    
      {jobs.map((value, index) => (
        <div className='' id={value._id} >
          <br />
          <Row xs={1} md={1} lg={1} className="g-4  mr-5" >

            <Col key={index} className='m-5 ps-5 mx-0' >
              <Card className="shadow" style={{ backgroundColor: "white", marginRight: "5rem", }} >

                <Card.Header className='m-3  bg-success text-white' > <h5> {value.companyname} </h5></Card.Header>
                <Card.Body className='pe-5'>

                  <Card.Title>  {value.jobtitle}</Card.Title>
                  <Card.Text>
                   <h6>Job Description:</h6> {value.jobdesc}
                  </Card.Text>
                  <Card.Text>
                  <h6>Requirements:</h6> <p align="justify"> {value.jobrequirements}</p>
                  </Card.Text>
                  <Card.Text>
                  <h6>Eligibility:</h6>{value.eligibility}
                  </Card.Text>
                  <Card.Text>
                  <h6>Experience:</h6> {value. experience} year
                  </Card.Text>
                  <Card.Text>
                  <h6>Salary:</h6>{value. salary}
                  </Card.Text>
                  <Card.Text>
                  <h6>Location:</h6> {value.location}
                  </Card.Text>
                  <Card.Text>
                  <h6>LastDate:</h6> {new Date(value.ExpiresAt).getDate()}-{new Date(value.ExpiresAt).getMonth()}-{new Date(value.ExpiresAt).getFullYear()}
                  </Card.Text>
                  <br />
                   <Card.Text> <h5>Apply Here</h5>

                  </Card.Text>
                          
                       {currentDate<new Date(value.ExpiresAt)?<JobApply val= {value}/>:<Button variant="secondary" disabled>Job Expired</Button>}
                       
                 

                      </Card.Body>
                    </Card>
                  </Col>

                </Row>
              </div>
      ))}

       
    </div>

          </>


        </div>

if(!token)renderjsx=<AccessDenied/>;

  return (

            renderjsx
    
          )

}

          export default Alumniview
