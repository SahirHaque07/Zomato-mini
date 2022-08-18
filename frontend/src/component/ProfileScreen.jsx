import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button,Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getmyOrdersAction} from "../action/orderAction";
import {userProfileUpdateAction} from "../action/userAction";
import Loader from "./Loader";
import Message from "./Message"

const ProfileScreen = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const loginReducer = useSelector(state=>state.loginReducer)
    const {userInfo:user} =loginReducer;
    const [email, setEmail] = useState(user.email)
    const [disable,setDisable]=useState(true)
    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const getMyOrdersReducer =useSelector(state=>state.getMyOrdersReducer);
    const updateUserReducer = useSelector(state=>state.updateUserReducer);
    const {loading:updateLoading,error:updateError,success,userInfo} =updateUserReducer;
    const {loading,error,myAllOrders} = getMyOrdersReducer;

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            setName(user.name);
            }else{
                navigate("/")
            }
         if(!myAllOrders){
            dispatch(getmyOrdersAction(user.id))
        }
    },[dispatch,myAllOrders,navigate,user]);

    const submitHandler= (e)=>{
        e.preventDefault();
       dispatch(userProfileUpdateAction(name,email,password));
       if(success){
           setName(userInfo.name);
           setEmail(userInfo.email);
       }
      
       
    }

    return (
        
        <Container className="my-3">
              <Row>
                <Col md={3}>
                    <h1>Profile</h1>
                    {updateLoading && <Loader />}
                    {userInfo && <Alert variant="success">Profile Updated</Alert>}
                    {updateError && <Message variant="danger">{updateError}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label><strong>Name : </strong></Form.Label>
                            <Form.Control type="name"
                                placeholder="Enter Name"
                                name="name"
                                value={name}
                            onChange={(e)=>setName(e.target.value)}
                            readOnly={disable}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Email address : </strong></Form.Label>
                            <Form.Control type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            readOnly={disable}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><strong>Password : </strong></Form.Label>
                            <Form.Control type="password"
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            readOnly={disable}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label><strong>Confirm Password : </strong></Form.Label>
                            <Form.Control type="password"
                                placeholder="Confirm Pasword"
                                name="confirmPassword"
                                value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            readOnly={disable}
                            />
                        </Form.Group>
                        <Button onClick={()=>setDisable(!disable)}>Edit</Button>
                        <Button style={{float:"right"}} type="submit">Update</Button>
                        
                    </Form>
                </Col>

                <Col md={7}>
                    <h1 className='text-center'>My Orders</h1>
                    {loading && <Loader />}
                    {error && <Message variant="danger">{error}</Message>}
                    <hr />
                   
                   {!myAllOrders ? null:myAllOrders.map((x)=>{
                       return(<>
                         <Row>
                             <Col md={4}>#OrderID : {x._id}</Col>
                             <Col md={1}>Amount : {x.orderAmount}</Col>
                             <Col md={2} className="text-center"> &nbsp;&nbsp;&nbsp;Delivered : {x.isDeliverd?" ✔️":"❌"}</Col>
                             <Col md={3}>Order Placed on : {x.createdAt}</Col>
                             <Col md={2}><Button variant="info"onClick={()=>navigate(`order/${x._id}`)}>Details</Button></Col>

                         </Row>
                         <hr />
                       </>)
                   })}

               
                    
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileScreen