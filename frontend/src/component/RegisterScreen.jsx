import React, { useState,useEffect } from 'react';
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import Loader from "./Loader"
import { userRegistrationAction, userLoginAction } from "../action/userAction"


const RegisterScreen = () => {
    const [message,setMessage] =useState();
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const registrationReducer = useSelector(state => state.registrationReducer)
    const {loading,error,userInfo} = registrationReducer;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password doesn't matches")
        } else {
            dispatch(userRegistrationAction(name, email, password));
             }
    }
    useEffect(()=>{
        if(userInfo){
            dispatch(userLoginAction(email,password));
            navigate("/")
        }
        {localStorage.getItem("userInfo")?navigate("/"):navigate("/register")}
    },[dispatch,navigate,userInfo,email,password])
    return (
        <div>
            <Container>
                <Row >
                  <Col md={6}>
                        <h1>Create Your Account</h1>
                        {loading && <Loader />}
                    {error&&<Message variant="danger">{error}</Message>}
                    {message && <Message variant="warning">{message}</Message>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name :</Form.Label>
                                <Form.Control type="name"
                                    placeholder="Enter Your Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                                <Form.Text className="text-muted">
                                    *required
                                </Form.Text>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address :</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <Form.Text className="text-muted">
                                    Password must be of atleast 6 characters
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password :</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required />
                                <Form.Text className="text-muted">
                                    Enter same password as entered above
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <p className="my-2">Already a User ? <Link to="/login">Login Now</Link></p>
                        </Form>
                    </Col>
                    <Col md={6} className="my-5">
                        <Image className="vert-move" src="https://www.pngkey.com/png/full/125-1253311_you-can-also-register-online-registration-png.png" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegisterScreen