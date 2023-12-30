import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import ListGroup from 'react-bootstrap/ListGroup';
function DocReview({rev}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
       console.log(rev);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {
          rev?.map(item=>(
            <ListGroup className='mt-3'>
            <ListGroup.Item>Patient Name : {item.patient_name}</ListGroup.Item>
            <ListGroup.Item>Date : {item.date}</ListGroup.Item>
            <ListGroup.Item>Rating : {item.rating}/5</ListGroup.Item>
            <ListGroup.Item>Comments : {item.comments}</ListGroup.Item>
           
          </ListGroup>
          ))
         }
        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}

export default DocReview
