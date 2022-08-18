import React from 'react';
import {Container,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const SuccessScreen = () => {
    const navigate =useNavigate();
  return (
      <Container className='my-2 text-center'>
    <div className="successCard text-center">
    <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
      <i className="checkmark">✓</i>
    </div>
      <h1 className='successHeading'>Success</h1> 
      <p className='successPara'>We received your purchase request;<br/> we'll be in touch shortly!</p>
      <Button className="my-3"variant='info'onClick={()=>navigate("/profile")}>Go to My Orders</Button>
    </div>
    </Container>
  )
}

export default SuccessScreen;