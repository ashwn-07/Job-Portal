import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import HomeNav from './HomeNav';
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

const Alumniview = () => {
  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const [userId] = useState(sessionStorage.getItem("userId"));
  const [userName]= useState(sessionStorage.getItem("userName"));
  
  const [currentDate, setDate]   = useState(new Date())
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
     axios.get("http://localhost:7000/api/viewjobs").then((response) => {
      setDate(new Date())
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
      "alumniId":userId
    }
    console.log(newdata);
    
    axios.post('http://localhost:7000/api/studendProfile', newdata )
    
      .then(response => {
        
        alert(response.data.message);
        window.location.reload(false);
      })

  }

  return (


    <div style={{ backgroundColor: "#214144" }} >
      <>
        <div >
          <HeaderAlumni/>
          <Button variant="outline-info" onClick={handleShow} className=' mt-5' >
            Create  Profile
          </Button>

          <Offcanvas show={show} placement={"end"} onHide={handleClose} className="mt-5" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title  >Create Your Profile  </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control size="sm" type="text" name='name' onChange={inputholder} placeholder="Name" />

                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" size="sm" name='emailid' onChange={inputholder} placeholder="name@example.com" />

                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone Number"
                  className="mb-3"
                >
                  <Form.Control type="text" name='phone' onChange={inputholder} placeholder="Phone Number" />

                </FloatingLabel> <FloatingLabel
                  controlId="floatingInput"
                  label="Highest Qualification"
                  className="mb-3"
                >
                  <Form.Control type="text" name='Qualification' onChange={inputholder} placeholder="Highest Qualification" />

                </FloatingLabel>


                <Form.Select name='course' onChange={inputholder} aria-label="Default select example">


                  <option value=''>Course studied at ICTAK</option>

                  <option value="FSD" >FSD</option>
                  <option value="DSA">DSA</option>
                  <option value="ML-AI">ML-AI</option>
                  <option value="RPA">RPA</option>
                  <option value="ST">ST</option>
                  <option value="CSA">CSA</option>
                </Form.Select> <br />

                <Form.Select name='batch' onChange={inputholder} aria-label="Default select example">
                  <option value="">Batch Details</option>
                  <option value="KKEM">KKEM</option>
                  <option value="NORKA">NORKA</option>
                  <option value="KDISC">KDISC</option>
                </Form.Select> <br />

                <Form.Select name='placement' onChange={inputholder} aria-label="Default select example">
                  <option value="">Placement Status</option>
                  <option value="Placed">Placed</option>
                  <option value="Job Seeking">Job Seeking</option>

                </Form.Select> <br />
                <FloatingLabel controlId="floatingPassword" label="Company Name (If placed)">
                  <Form.Control type="text" name='company' onChange={inputholder} placeholder="Company Name" />
                </FloatingLabel><br />
                <Button variant="outline-success" onClick={shareData} >Submit</Button>{' '}
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

                <Col key={index} className='m-5'>
                  <Card style={{ backgroundColor: "lightgrey", marginRight: "5rem" }} >

                    <Card.Header> <h5> {value.companyname} </h5></Card.Header>
                    <Card.Body>

                      <Card.Title>  {value.jobtitle}</Card.Title>
                      <Card.Text>
                       <h6>Job Description:</h6> {value.jobdesc}
                      </Card.Text>
                      <Card.Text>
                      <h6>Requirements:</h6> {value.jobrequirements}
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
                      <h6>LastDate:</h6> {value. ExpiresAt}
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
          )

}

          export default Alumniview
