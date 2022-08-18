import React from 'react';
import { Container, Row, Col, Image, ListGroup, ListGroupItem, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom"
import Message from './Message';
import { cartRemoveItemAction } from "../action/cartAction"
import CheckOut from './CheckOut';

const CartScreen = () => {
   let price;
   let totalprice; 
   const navigate =useNavigate();
   const loginReducer = useSelector(state=>state.loginReducer);
   const {userInfo} = loginReducer
    const addToCartReducer = useSelector((state) => state.addToCartReducer)
    const { error, cartItems } = addToCartReducer;
    const dispatch = useDispatch()
  cartItems.length===0?price=0.00:price=cartItems.reduce((acc,elem)=>acc + (elem.price * elem.qty),0)
  if(price){
    totalprice= price + (price*0.10) + (price<100?50:0);
  }else{
      totalprice=0;
  }
    return <>
        {cartItems.length === 0 ? <Message variant="danger">Your Cart is Empty</Message> :
            <Container variant="flush">
                {error && <Message variant="danger">{error}</Message>}

                <Row>
                  
                    <hr />
                    <Col md={8} className="my-2" >
                    <h2>Shopping Cart</h2>
                        {cartItems.map((item) => {
                            return <>
                                <Row>
                                    <Col md={2}>
                                       <Link to="/"> <Image src={item.image} alt={item.name} fluid /></Link>
                                    </Col>
                                   <Col md={2}><strong>{item.name}</strong></Col>
                                    <Col md={2}>{item.qty}</Col>
                                    <Col md={2}>{item.variant}</Col>
                                    <Col md={2}>{item.price}</Col>
                                    <Col md={2}><i className="fa-solid fa-xmark" style={{ color: "red", cursor: "pointer" }} onClick={() => { dispatch(cartRemoveItemAction(item.product)) }}></i></Col>

                                </Row>
                                <hr />


                            </>
                        })}
                    </Col>
                    
                    {cartItems.length === 0 ? null : <Col md={4}>

                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}) Items</h2>
                        <hr />
                        <Card className="d-flex justify-content-center">
                            <ListGroup>

                                <ListGroupItem>
                                   <Row>
                                       <Col>Items Price :</Col>
                                       <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price}</Col>
                                   </Row>
                                 </ListGroupItem>

                                 <ListGroupItem>
                                   <Row>
                                       <Col>Tax Price (Include 10% of Items Price) :</Col>
                                       <Col><i className="fa-solid fa-indian-rupee-sign"></i> {(price*0.10).toFixed(2)}</Col>
                                   </Row>
                                 </ListGroupItem>
                                 <ListGroupItem>
                                   <Row>
                                       <Col>Delivery Charges  :</Col>
                                       <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price<100?50:0.00}</Col>
                                   </Row>
                                 </ListGroupItem>

                                 <ListGroupItem>
                                   <Row>
                                       <Col>Total Price :</Col>
                                       <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price + (price*0.10) + (price<100?50:0.00)}</Col>
                                   </Row>
                                 </ListGroupItem>
                            {userInfo? <CheckOut price={totalprice}/> : <Button className='btn btn-block'style={{borderRadius:"23px"}} onClick={()=>navigate("/login")}>Login Yourself</Button>}
                               
                            </ListGroup>
                        </Card>
                    </Col>}

                </Row>


            </Container>}


           
      
    </>

}

export default CartScreen;