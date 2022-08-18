import React from 'react';
import {useNavigate} from "react-router-dom"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {useSelector,useDispatch} from "react-redux"
import {userLogOutAction} from "../action/userAction"
const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const addToCartReducer = useSelector((state) => state.addToCartReducer)
  const {cartItems} = addToCartReducer;
  const loginReducer = useSelector(state=>state.loginReducer)
  const {userInfo} = loginReducer; 
  const logOutHandler=()=>{
     dispatch(userLogOutAction());
     dispatch({type:"GET_MY_ORDER_RESET"})
     navigate("/login")
  }
  return (
    <>
    <Navbar bg="danger" expand="lg"variant='dark'>
    <Container>
        <LinkContainer to="/">
      <Navbar.Brand><strong style={{fontStyle:"italic"}}>Zomato</strong></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {!userInfo ?<LinkContainer to="/login">
              <Nav.Link className='nav_item'><i className="fa-solid fa-user"></i> Login</Nav.Link>
              </LinkContainer>:<><NavDropdown className=""title= {`✔️${userInfo.name}`} id="basic-nav-dropdown">
          <LinkContainer to="/profile">
          <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logOutHandler}>Logout</NavDropdown.Item></NavDropdown></>}
          
          <LinkContainer to="/cart">
          <Nav.Link><i  className="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length===0?null:cartItems.reduce((acc,item)=>acc+Number(item.qty),0)})</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header;