import React from 'react';
import {Spinner} from "react-bootstrap"

const Loader = () => {
  return (
      <div className='loader'>
    <Spinner animation="border" variant="primary" role="status"style={{height:"150px",width:"150px"}} >
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  )
}

export default Loader