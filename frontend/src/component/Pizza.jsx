import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { Card, Row, Col, Button, Modal, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addToCartAction } from "../action/cartAction";
import Message from "./Message"

const Pizza = ({ items }) => {
  const [message,setMessage] = useState()
  //Creating Modals...
  const [show, setShow] = useState(false);
  let price;
  const id = items._id;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Leaving Modals...
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState("small");
  const navigate = useNavigate();

  ///adding to cart ...
  const addToCartHandler = () => {
    dispatch(addToCartAction( {id, qty, variant, price}));
    navigate(`cart/${items._id}?${variant},${qty},${price}`);
    // setMessage("Item Added to Cart Successfully ✔️");
    
  }

  const [zoom, setZoom] = useState(false);
  const zoomIn = () => {
    setZoom(true);

  }
  const zoomOut = () => {
    setZoom(false);
  }


  return (
    <>
    {/* {message&&<Message variant='warning'>{message}</Message>} */}
    
      {<Card style={{ width: '18rem' }} className="my-4" onMouseEnter={zoomIn} onMouseLeave={zoomOut}>
        <Link to="/">
          <Card.Img style={{ height: zoom ? "205px" : "200px", width: zoom ? "291px" : "286px", objectFit:"fill" }} variant="top" src={`${items.image}`}
            onClick={handleShow} />
        </Link>
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <hr />
          <Card.Text>
            {/* {items.description} */}
          </Card.Text>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients:</h6>
                <select value={variant} onChange={(e) => setVariant(e.target.value)}>

                  {items ? items.varients.map((v) => (<option>{v}</option>)) : ""}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>

                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(10).keys()].map((qty) => (<option key={qty}>{qty + 1}</option>))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          {price = items ? Number(items.prices[0][variant] * qty) : "00.00"}
          <Card.Text>
            <h6>Price : <i className="fa-solid fa-indian-rupee-sign"></i> {items ? Number(items.prices[0][variant] * qty) : "00.00"}</h6>
          </Card.Text>
          <Button variant="warning" className='ms-auto' onClick={addToCartHandler}>Add To Cart</Button>
        </Card.Body>
      </Card>}
 
      {/* //Modals Code  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{items.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Image src={items.image} alt="no-Image Found" style={{ width: "100%", height: "100%" }} /></Modal.Body>
        <Modal.Body>{items.description}😍🤩</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose();
            addToCartHandler();
          }}  >
            Order Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Pizza