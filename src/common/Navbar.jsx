import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
    <ul >
        
     <li > <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/services">Services</Link> </li>
      <li> <Link to="/certificationProgram">Certification Program</Link> </li>
      <li> <Link to="/growYourBusiness">Grow Your Busniess</Link> </li>
      <li> <Link to="/placementAssuranceProgram">Placement Assurance Program</Link> </li>

      <li> <Link to="/professionalTraining">Professional Training</Link></li>
      <li>  <Link to="/webTalentGravity">Web Talent Gravity</Link></li>
      <li> <Link to="/contact">Contact</Link></li>
      <li> <Link to="/training">Traning</Link></li>

        
        </ul>
    </div>
  )
}

export default Navbar