import React from 'react'
import HomeNav from './HomeNav'
import operationalimg from '../Img/operating units.png'
import ictakimg from '../Img/ictak image.jpg'
import vision from '../Img/vision-values.jpg'
import { Container, Typography } from '@mui/material'

const Aboutus = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
    <HomeNav />
    <Container>
        <div classNameName="About-us-section">
            <div classNameName="About-us-first-section">
                <div classNameName='row'>
                    <div classNameName='col-md-8'>
                        <div classNameName='About-us-first-section-img'>
                            <img style={{ width: '100%', height: 'auto' }} src={ictakimg} alt="Your Image" ></img>
                        </div>

                    </div>
                    <div classNameName='col-md-4'>
                        <div classNameName='About-us-first-section-text'>
                            <div classNameName='About-us-first-section-heading'>
                                <Typography variant='h3' classNameName="About-us-first-section-title">
                                    ICTAK
                                </Typography>
                            </div>
                            <div classNameName='About-us-first-section-paragraph'>
                                <p style={{fontSize:'16px'}}>
                                    ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div classNameName="About-us-second-section">
                <div classNameName='row'>
                    <div classNameName='col-md-4'>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }} classNameName='About-us-second-section-text'>
                            <div classNameName='About-us-second-section-heading'>
                                <Typography variant='h4' classNameName="About-us-second-section-title">
                                    Vision & Values
                                </Typography>
                            </div>
                            <div classNameName='About-us-second-section-paragraph'>
                                <p style={{fontSize:'16px'}}>
                                    "To emerge as the single-point establishment for all the ICT related capability building in the state."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div classNameName='col-md-8'>
                        <div classNameName='About-us-second-section-img'>
                            <img style={{ width: '100%', height: 'auto' }} src={vision} alt="Your Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div classNameName="About-us-fourth-section">
                <div classNameName='row'>
                    <div classNameName='col-md-6'>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }} classNameName='About-us-fourth-section-text'>
                            <div classNameName='About-us-fourth-section-heading'>
                                <Typography variant='h4' classNameName="About-us-fourth-section-title">
                                    Operating Units
                                </Typography>
                            </div>
                            <br /><br />
                            <div classNameName='About-us-fourth-section-paragraph'>
                                <p style={{fontSize:'16px'}}>
                                    The ICT Academy of Kerala, as a team works under different Operations Units in order to effectively achieve the organisation's vision and mission. The OUs of ICTAK include the Academic Operations, Corporate Operations, Government Operations, IT Solutions, Knowledge Office, Retail Operations and Corporate Functions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div classNameName='col-md-6'>
                        <div classNameName='About-us-fourth-section-img'>
                            <img style={{ width: '100%', height: 'auto' }} src={operationalimg} alt="Your Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div classNameName='About-us-commitee'>
                <div classNameName='About-us-commitee-heading'>
                    <Typography variant='h4'classNameName="About-us-commitee-title">
                        Technical and Management Advisory Committe
                    </Typography>

                </div>
                <div classNameName='About-us-commitee-details'>
                    <p style={{fontSize:'16px'}}>
                        The Technical and Management Advisory Committee is the prime body of the ICT Academy of Kerala, comprising industry experts and members from government bodies. The committee assists the management in overseeing the implementation of technical recommendations in giving industry-relevant skills to the graduates in the state. The committee also takes appropriate or additional steps to improve the quality of the curriculum used for upskilling.
                    </p>
                    <div classNameName="About-us-commitee-details-list">
                        <ol style={{fontSize:'16px'}}>
                            <li>Robin Tommy (Head Rapid Lab, TCS)</li>
                            <li>Ganesh Iyer (Senior Manager & Head - Learning & Assessment, IBS)</li>
                            <li>Francis Regan (CTO & Co-Founder, Ionics 3DP)</li>
                            <li>Dr. Hiran V. Nath (Assistant Professor, NIT Calicut)</li>
                            <li>Rajkin G. (Technology Solutions Leader, QuEST Global)</li>
                            <li>Muthuraman C. (Senior GDS - Technology Consulting, EY)</li>
                            <li>Ravi Ganapathi (Lead Principal, Infosys)</li>
                            <li>Naveen (Freelancer)</li>
                            <li>Bobinson K.B. (President & CEO, AgileBlaze)</li>
                            <li>Syamkumar A.S. (Security and Operations Lead, SecurityAdvisor)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</div>
  )
}

export default Aboutus