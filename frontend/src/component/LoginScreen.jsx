import React,{ useState,useEffect } from 'react';
import { Form, Button, Row, Col, Container ,Image} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { userLoginAction } from "../action/userAction";
import Message from "./Message";
import Loader from "./Loader";
const LoginScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("");
     const loginReducer = useSelector((state)=>state.loginReducer);
     const {loading,error,userInfo}=loginReducer;
    
    useEffect(()=>{
        !userInfo ? navigate("/login"):navigate("/")
        if(userInfo){
            navigate("/");
        }else{
            navigate("/login")
        }
    },[userInfo,navigate])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userLoginAction(email,password));
       }
    
    
    return (
        <Container className="my-3">
             <Row>
                <Col md={6}>
                    <h1>SIGN IN</h1>
                    {loading && <Loader />}
                    
                    {error && <Message variant="danger">{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Email address : </strong></Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><strong>Password :</strong></Form.Label>
                            <Form.Control type="password" 
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                            required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stay Logged In" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="my-2">New User ? <Link to="/register">Register Now</Link></p>
                </Col>
                <Col md={6} className="my-2">
                    <Image className="vert-move"src="https://cdni.iconscout.com/illustration/premium/thumb/online-sign-up-4489361-3723268.png"alt="notFound" fluid />
                    </Col>
            </Row>

        </Container>
    )
}

export default LoginScreen