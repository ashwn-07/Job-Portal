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
const Alumniview = () => {
  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const target = useRef(null);
  const [userId, setuserId] = useState(sessionStorage.getItem("userId"));
  const inputholder = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    console.log(e);
  };

  // response handler

const handlefileSubmit = (e,jobid)=>{
 e.preventDefault()
  if (file && jobid) {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobId', jobid);
   
  
    axios.post("http://localhost:7000/upload", formData)
    .then((response)=>{
        alert(response.data.message)
    })
    .catch((error)=>{
         console.log( "the error is" , error)
        })

  }

}






  const handleSubmit = (val) => {
    let posterid = val.posterid;
    let postid = val._id;
    if (file) {
       let respdata = {
         "_id": postid,
         "responses": {
          responsetype: "pdf",
          path: link,
          posterId: posterid,
          responderid: userId
         }
        }
      axios.put("http://localhost:7000/api/apply", respdata)
        .then(response => {
          console.log(userId);
          alert(response.data.message);
          // window.location.reload(false);

        })


    }
      if (link) {
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
          console.log(response);
          alert(response.data.message);
          // window.location.reload(false);

        })

    }
     else {
      console.log('Please select a file or enter a link.');
    }
  };
  

  


  useEffect(() => {
    axios.get("http://localhost:7000/api/viewjobs").then((response) => {
      setJobs(response.data);
    });
  }, []);


  const shareData = () => {
    axios.post('http://localhost:7000/api/studendProfile', data)
      .then(response => {
        alert(response.data.message);
        window.location.reload(false);
      })

  }

  return (


    <div style={{ backgroundColor: "#214144" }} >
      <>
        <div >
          <HomeNav />
          <Button variant="outline-info" onClick={handleShow} className=' mt-5' >
            Create  Profile
          </Button>

          <Offcanvas show={show} placement={"end"} onHide={handleClose} className="mt-5" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title  >Create Your Profile</Offcanvas.Title>
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
            <div className=''>
              <br />
              <Row xs={1} md={1} lg={1} className="g-4  mr-5" >

                <Col key={index} className='m-5'>
                  <Card style={{ backgroundColor: "lightgrey", marginRight: "5rem" }}>

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
                      <br />
                      <Card.Text> <h5>Apply Here</h5>

                      </Card.Text>

          {/* apply form */}
          {/* 'http://localhost:7000/upload' */}
          {/* method='POST' action={()=>handlepdfupload(value._id)} encType='multipart/form-data' */}

                      <form onSubmit={(e)=>handlefileSubmit(e, value._id)} >
                              <div>
                                <label>PDF:</label>
                                <input type='file' name="resume" onChange={handleFileChange}    />
                                <input type="submit"/>
                              </div>
                              <div>
                                <label>Link:</label>
                                <input
                                  type="text"
                                  value={link}
                                  onChange={handleLinkChange}
                                  placeholder="Enter a link to a PDF"
                                />
                               
                              </div>

                             </form> 

                      
                     

                            <button className='btn btn-dark btn-me-md-2' onClick={() => handleSubmit(value)}>Submit</button>
                            


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