import React from 'react'

const NotFound = () => {
  return (
    <div>
        <div className="container">
            <div className="d-flex flex-column gap-4 justify-content-center align-items-center" style={{'height':'100vh'}}>
                <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" width={'500'} alt="" />
                <Link to={'/'} className='btn btn-dark p-3' >Go Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound