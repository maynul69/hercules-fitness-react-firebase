import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import ReadMoreReact from "read-more-react";


const Sarvice = (props) => {
    const{name,description,img}=props.service
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-5 mx-auto">
        <Card
          style={{ width: "18rem", padding: "10px" }}
          className="bg-dark text-light"
        >
          <Card.Img variant="top " src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <ReadMoreReact
                text={description}
                min={100}
                ideal={100}
                max={100}
                readMoreText={"read more..."}
              />
            </Card.Text>
            <Button className="btn btn-primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Sarvice;
