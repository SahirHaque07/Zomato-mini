import React, { useEffect } from 'react';
import { Container,Row,Col,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import AdminScreen from '../AdminScreen';
import { adminUserAction } from "../../action/adminAction";
import Loader from "../Loader";
import Message from "../Message";

const Users = () => {
    const dispatch = useDispatch();
    const adminUserReducer =useSelector(state=>state.adminUserReducer);
    const {loading,error,users} =adminUserReducer;

    useEffect(() => {
        dispatch(adminUserAction())
    }, [dispatch])

    return (
        <Container>
            <AdminScreen />
            <Container>
                <Row className='my-3 mx-3'>
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
                <Col md={12}>
                    <u><h2>User Details</h2></u>
                {!users?null:users.map((u)=>{
                    return(<>
                    <Row className='my-2'>
                        <Col md={1}><i className="fa-solid fa-user-check"></i></Col>
                        <Col md={4}>User ID : #{u._id} </Col>
                        <Col md={2}>User Name : {u.name}</Col>
                        <Col md={3}>Email ID : {u.email}</Col>
                        <Col md={2}><strong style={{backgroundColor:"yellow",borderRadius:"20px"}}>Verified</strong></Col>
                    </Row>
                    <hr />
                    </>)
                })}
                </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Users