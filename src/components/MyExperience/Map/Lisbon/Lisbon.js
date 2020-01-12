import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const Lisbon = () => {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>SSC4</Alert.Heading>
          <p>
            Full Stack Developer - responsible to start the project using mySql and Java, for this I use SpringBoot to build the MVC and MySQL Workbench to to the database.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me!!
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
  export default Lisbon;