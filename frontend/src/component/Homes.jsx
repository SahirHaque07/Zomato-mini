import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pizzaAction } from "../action/pizzaAction";
import {  Row, Col, Container} from "react-bootstrap";
import Loader from "./Loader";
import Pizza from './Pizza';
import Message from "./Message";
import Headers from "./Headers"

const Homes = () => {
   
    const pizzaReducer = useSelector((state) => state.pizzaReducer);
    const { loading, error, pizza } = pizzaReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!pizza) {
            dispatch(pizzaAction())
        }

    }, [dispatch]);

    return (
        <>
       <Headers />
     
        {loading ? <div className='main'><Loader /></div> : error ? <div style={{marginTop:"70px"}}><Message variant="danger">{error}</Message></div> : <Container className="mt-2 ">
            <Row className='home'>
                {pizza ? pizza.map((items) => {
                    return <Col lg={4} xl={3} md={6} sm={12}>
                        <Pizza items = {items}/>
                    </Col>
                }) : ""}
              
            </Row>
            
       </Container>}
        
        </>
    )
}

export default Homes