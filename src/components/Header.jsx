import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
          <nav className='d-flex justify-content-between align-items-center py-3' >
            <div className="logo text-success h3">Book-LIB</div>
            <ul className='list-unstyled d-flex gap-4'>
              <li>
                <Link to={"/"} className='text-decoration-none' >Home</Link>
              </li>
              <li>
                {/* <Link to={"/categories"} className='text-decoration-none' >Categories</Link> */}
              </li>
              <li>
                <Link to={"/about"} className='text-decoration-none' >About</Link>
              </li>
              <li>
                <Link to={"/contact"} className='text-decoration-none' >Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header