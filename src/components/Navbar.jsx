import React from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contex/AuthContex'
import { authTypes } from '../types/authTypes'

const Navbar = () => {
const navigate = useNavigate()

 const {dispatch} =  useContext(AuthContext)

const handleLogout = () => {
dispatch({type: authTypes.logout })

navigate("/login")

}

  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
      <h2 className="navbar-brand" href="#">DB App</h2>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/man" className={({isActive}) => `nav-link${isActive ? 'active text-white' : ''}`} aria-current="page" href="#">Man</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="/woman" className={({isActive}) => `nav-link${isActive ? 'active text-white' : ''}`}  href="#">Woman</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="/search" className={({isActive}) => `nav-link${isActive ? 'active text-white' : ''}`}  href="#">Search</NavLink>
          </li>
          
        </ul>
        
      </div>
      <div className='d-flex me-auto'>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>

        </div>
    </div>
  </nav>
  )
}

export default Navbar
