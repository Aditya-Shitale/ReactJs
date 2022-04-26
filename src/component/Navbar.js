import React from 'react'
import PropTypes from 'prop-types'
// import { getByDisplayValue } from '@testing-library/react'


export default function Navbar(props) {
  // const colorToRed = () =>{
  // }
  // const colorToGreen = () =>{
  // }
  // const colorToBlue = () =>{
  // }
  // const mystyle = () =>{backgroundColor: "yellow"}
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/" >{props.Title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.textAbout}</a>
        </li>
        
      </ul>
      {/* *****************************************************************WORK TO DO************************************************************************************************ */}

      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}

      {/* <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu mx-0.1" aria-labelledby="dropdownMenuLink">
    <li><button className="dropdown-item" onClick={colorToRed}>Another action</button></li>
    <li><button className="dropdown-item" onClick={colorToGreen}>Something else here</button></li>
    <li><button className="dropdown-item" onClick={colorToBlue}>Action</button></li>
  </ul>
</div> */}
{/* **********************************************************************WORK TO DO******************************************************************************************* */}

 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
     
    </div>
  </div>
 
</nav>
    </div>
      
  )
}

Navbar.propTypes = {Title: PropTypes.string.isRequired,
                    textAbout: PropTypes.string.isRequired}

Navbar.defaultProps ={
    Title: 'Set title here',
    textAbout: 'About text here'
};