import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import AdminScreen from '../AdminScreen';
import { adminProductAction } from "../../action/adminAction";
import Loader from '../Loader';
import Message from '../Message';
import SubContent from "../SubContent"


const Products = () => {
    const dispatch = useDispatch();
    const adminProductReducer = useSelector(state => state.adminProductReducer)
    const { loading, error, products } = adminProductReducer;
    useEffect(() => {
        dispatch(adminProductAction());
    }, [dispatch])
    return (
        <Container>
            <AdminScreen />
            <Container className='mx-3'>
                <Row>
                    <h1><u>Products</u></h1>
                    {loading && <Loader />}
                    {error && <Message variant="danger">{error}</Message>}
                    <Col md={12} className="my-3">
                        {!products ? null : products.map((p) => {
                            return (<>
                                <Row>
                                    <Col md={2}><Image src={p.image} fluid /></Col>
                                    <Col md={2}>{p.name}</Col>
                                    <Col md={2}>{p.prices[0]["small"]} </Col>
                                    <Col md={2}>{p.varients[0]}</Col>
                                    <Col md={2}>{p.category}</Col>
                                    <Col md={2}><SubContent x={p}/></Col>
                               
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




export default Products