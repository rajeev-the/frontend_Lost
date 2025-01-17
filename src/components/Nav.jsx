import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} className="nav-item active d-flex align-items-center text-decoration-none">
    <img src="https://img.freepik.com/free-vector/magnifying-glass-with-warning_78370-6943.jpg" width="50" height="50" alt=""/>
    <span className="nav-link" style={{ marginLeft: '10px' }}>Home</span>
  </Link>
</nav>



  )
}

export default Nav