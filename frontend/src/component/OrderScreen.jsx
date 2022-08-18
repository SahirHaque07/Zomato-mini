import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Image,Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { orderFetchAction } from "../action/orderAction";
import Loader from "./Loader";
import Message from "./Message"
const OrderScreen = () => {
    let price;
    const navigate = useNavigate();
    const loginReducer = useSelector(state => state.loginReducer);
    const { userInfo } = loginReducer;
    const { id } = useParams();
    const dispatch = useDispatch();
    const getOrderReducer = useSelector(state => state.getOrderReducer);
    const { loading, error, myOrders } = getOrderReducer;

    useEffect(() => {
        // user = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
        if (userInfo) {
            dispatch(orderFetchAction(id));
        }
    }, [dispatch, id,userInfo]);

    {!myOrders ? price=0.00:price = Number(myOrders.orderItems.reduce((acc, item) => acc + (item.qty * item.price), 0))}
    return (
        <>
        <div>
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {!myOrders ? null :<div className='placeOrderContainer'> <Container>
                <Row>
                    {loading && <Loader />}
                    {error && <Message variant="danger">{error}</Message>}
                    <Col md={8}>
                        <h1 className="text-center" style={{ backgroundColor: "#", color: "white", borderRadius: "15px" }}>Order ID : {id}</h1>
                        <h3 style={{color:"white"}}>User Information :</h3>
                        <ListGroup>
                            <ListGroupItem>
                                Name : {myOrders.name}<br />
                                Email : {myOrders.email}
                            </ListGroupItem>
                        </ListGroup>
                        <hr />
                        <h3 style={{color:"white"}}>Shipping Address :</h3>
                        <ListGroup>
                            <ListGroupItem>
                                Address : {myOrders.shippingAddress.address}<br />
                                City : {myOrders.shippingAddress.city}<br />
                                Pin : {myOrders.shippingAddress.pin}<br />
                                Country : {myOrders.shippingAddress.country}<br />
                            </ListGroupItem>
                        </ListGroup>
                        <hr />
                        <h3 style={{color:"white"}}>OrderItems :</h3>
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    {myOrders.orderItems.map((x) => {
                                        return <>
                                            <Col md={2}>
                                                <Image src={x.image} alt={x.name} fluid />
                                            </Col>
                                            <Col md={2}>
                                                <p>{x.name}</p>
                                            </Col>

                                            <Col md={2}>

                                                <p>{x.qty}</p>
                                            </Col>

                                            <Col md={2}>
                                                <p>{x.variant}</p>
                                            </Col>

                                            <Col md={2}>
                                                <p>{x.price}</p>
                                            </Col>
                                            <hr />
                                        </>
                                    })}
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                       <Card className='my-2'>
                        <h1>Order Summary</h1>

                           <Card.Text>
                               <ListGroup>
                                   <ListGroupItem>
                                       <Row>
                                           <Col>Items Price :</Col>
                                            <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price}</Col>                                           
                                       </Row>
                                   </ListGroupItem>

                                   <ListGroupItem>
                                       <Row>
                                           <Col>Tax Price (Inc all taxes) :</Col>
                                            <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price*0.10}</Col>                                           
                                       </Row>
                                   </ListGroupItem>


                                   <ListGroupItem>
                                       <Row>
                                           <Col> Delivery Charges :</Col>
                                            <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price<100?49:`0(Free)`}</Col>                                           
                                       </Row>
                                   </ListGroupItem>


                                   <ListGroupItem>
                                       <Row>
                                           <Col>Total Amount (Net Payable) :</Col>
                                            <Col><i className="fa-solid fa-indian-rupee-sign"></i> {price+(price*0.10)+(price<100?50:0)}</Col>                                           
                                       </Row>
                                   </ListGroupItem>
                               </ListGroup>
                                
                           </Card.Text>
                           <Button variant="success"onClick={()=>navigate("/profile")}>Order Placed</Button>
                       </Card>
                    </Col>
                </Row>
            </Container></div>}

            </div>
        </>

    )
}

export default OrderScreen