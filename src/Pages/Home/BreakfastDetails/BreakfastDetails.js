import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BreakfastDetails.css';

const BreakfastDetails = ({ breakfastDetails }) => {
  const { title, img, price, description} = breakfastDetails;
  return (
    <div>
      <div className="breakfast-details">
      <Card style={{padding: '20px', border: 'none'}}>
        <Card.Img style={{width: '200px', margin: 'auto', paddingTop: '20px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.slice(0, 100)}
          </Card.Text>
          <Card.Title>${price}</Card.Title>
          <Link to="/login">
          <Button  className="btn btn-danger">Add to Cart</Button>
          </Link>
          
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default BreakfastDetails;
