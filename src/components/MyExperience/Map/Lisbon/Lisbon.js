import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const Lisbon = () => {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="info">
          <Alert.Heading>Europcar Shared Service</Alert.Heading>
          <p>
          Account payable - there I understood that I can just have one way to be succeed, learning code. Working to UK and Spain holding I passed all the time talking with supplier and managers to solve problems, but few hours doing finance tasks. That was my point break in my finance career and the start of my present like a Full Stack Developer.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-info">
              Close me
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
  export default Lisbon;