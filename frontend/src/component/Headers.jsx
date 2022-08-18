import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import {useSelector,useDispatch} from "react-redux";
import {userLogOutAction} from "../action/userAction";
import {filterPizza,pizzaAction} from "../action/pizzaAction";
const Headers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search,setSearch]=useState("");
  const addToCartReducer = useSelector((state) => state.addToCartReducer)
  const {cartItems} = addToCartReducer;
  const loginReducer = useSelector(state=>state.loginReducer)
  const {userInfo} = loginReducer; 
  const logOutHandler=()=>{
    dispatch(userLogOutAction());
    dispatch({type:"GET_MY_ORDER_RESET"});
    navigate("/login")
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    if(search!==""){
      dispatch(filterPizza(search));
    }else{
      dispatch(pizzaAction())
    }
    
   
  }
  return (
    <div className='nav-container'>
      <Navbar bg="none" expand="lg" variant='dark'>
        <Container>
          <LinkContainer to ="/">
            <Navbar.Brand><strong style={{ fontStyle: "italic" }} className="nav_heading"><h1>Zomato</h1></strong></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!userInfo ?<LinkContainer to="/login">
              <Nav.Link className='nav_item'><i className="fa-solid fa-user"></i> Login</Nav.Link>
              </LinkContainer>:<><NavDropdown className=""title={`✔️${userInfo.name}`}  id="basic-nav-dropdown">
          <LinkContainer to="/profile">
          <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logOutHandler}>Logout</NavDropdown.Item></NavDropdown></>}
              <LinkContainer to="/cart">
              <Nav.Link className='nav_item'><i  className="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length===0?null:cartItems.reduce((acc,item)=>acc+Number(item.qty),0)})</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="secondaryContainer">
        <h1 className='headerHeading zomato'>Zomato</h1>
        <h1 className='headerHeading'>Discover the best food & drinks in Your City</h1>

        <Form className="d-flex"onSubmit={submitHandler}>
          <FormControl
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success"type="submit">Search</Button>
        </Form>

      </div>
    </div>
  )
}

export default Headers