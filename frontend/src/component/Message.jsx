import React from 'react';
import {Alert} from "react-bootstrap"

const Message = ({children},{variant}) => {
  return (
    <Alert key="message" variant={variant}>
    {children}
  </Alert>
  )
}

export default Message