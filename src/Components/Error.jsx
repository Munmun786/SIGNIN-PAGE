import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

const history = useNavigate();

  return (
   <>
     <div className="container">
        <div className="error d-flex flex-column justify-content-lf-center align-item-center">
            <h4>404 Error ! page Not Found </h4>
            <button className="btn btn-primary" onClick={()=>history("/")}>Redirect Login Page</button>
        </div>
     </div>
   </>
  )
}

export default Error
