import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Doclist({item}) {
    console.log(item);
  return (
    <div>
      <Link style={{textDecoration:'none'}} to={`/view/${item.id}`}>
        <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={item} /> */}
      <Card.Body>
        <Card.Title>{item.hospital}</Card.Title>
        <Card.Text>
         <div>
            Name:{item.name}
         </div>
         <div>
         Specialty:{item.specialty}
         </div>
         <div>
         Ratings : {item.rating} / 5
         </div>
        </Card.Text>
        <Button variant="danger">Book Now</Button>
      </Card.Body>
    </Card>
      </Link>
       
    </div>
  )
}

export default Doclist
