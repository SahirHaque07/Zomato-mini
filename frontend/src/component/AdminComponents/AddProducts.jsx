import React, { useState } from 'react';
import { Container, Form, Button,Alert} from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux"
import AdminScreen from '../AdminScreen';
import {addProductAction} from "../../action/adminAction";
import Loader from "../Loader";
import Message  from "../Message";

const AddProducts = () => {
    const [name, setName] = useState({ name: "", description: "", image: "", category: "", small: "", medium: "", large: "" })
    const dispatch = useDispatch();
    const addProductReducer= useSelector(state=>state.addProductReducer);
    const {loading,success,error}= addProductReducer;

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setName((prevValue) => {
            return { ...prevValue, [name]: value }
        });

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const pizza={
            name:name.name,
            image:name.image,
            description:name.description,
            category:name.category,
            prices:{
                small:name.small,
                medium:name.medium,
                large:name.large
            }
        }
        if(!success){
            dispatch(addProductAction(pizza));
        }
        
    }


    return (
        <Container>
            <AdminScreen />
            {loading&&<Loader />}
            {success&&<Alert variant="success">Pizza Added Successfully</Alert>}
            {error&&<Message variant="danger">{error}</Message>}
            <h1 className="text-center my-3" style={{ backgroundColor: "yellow" }}><u>Add New Pizza</u></h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name of Pizza</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Pizza Name"
                        name="name"
                        value={name.name}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Image URL"
                        name="image"
                        value={name.image}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicdescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        name="description"
                        value={name.description}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Category"
                        name="category"
                        value={name.category}
                        onChange={changeHandler}
                    />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPricesSmall">
                    <Form.Label>Prices:</Form.Label>
                    <Form.Control className="my-2"
                        type="text"
                        placeholder="Enter Price Small"
                        name="small"
                        value={name.small}
                        onChange={changeHandler}
                    />
                    <Form.Control className="my-2"
                        type="text"
                        placeholder="Enter Price Small"
                        name="medium"
                        value={name.medium}
                        onChange={changeHandler}
                    />

                    <Form.Control className="my-2"
                        type="text"
                        placeholder="Enter Price Small"
                        name="large"
                        value={name.large}
                        onChange={changeHandler}
                    />

                </Form.Group>


                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddProducts;