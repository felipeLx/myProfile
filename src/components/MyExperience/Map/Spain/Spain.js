import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const Spain = () => {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="secondary">
          <Alert.Heading>Inoxcrom</Alert.Heading>
          <p>
            {`Controller - analysis and production control, part of the team in the implementation of SAP (CO-FI), cost control and presentation of results for management.\n\n 
            This experience was a conclusion of my Spain time, after six year working with people all around the Globe in different companies using SAP, I decided to back to Brazil`}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-secondary">
              Close me!!
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
  export default Spain;