import React,{useState} from 'react';
import {Modal,Image,Button} from "react-bootstrap"

const SubContent = ({x}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (<>
    <Button onClick={handleShow} variant="danger">Details</Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{x.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body><Image src={x.image} alt="no-Image Found" style={{ width: "100%", height: "100%" }} /></Modal.Body>
    <Modal.Body>{x.description}😍🤩</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="danger" onClick={() => {
        handleClose();
       }}  >
        Exit
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default SubContent