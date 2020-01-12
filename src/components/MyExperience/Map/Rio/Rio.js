import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const Rio = () => {
    const [showJucai, setShowJucai] = useState(true);
    const [showOthers, setShowOthers] = useState(true);

    return (
      <>
        <div>
          <Alert show={showJucai} variant="warning">
            <Alert.Heading>Juçaí</Alert.Heading>
            <p>
              Food Industry - building from the zero I worked like the responsible for the financial area. Done the negotiation with suppliers, bank and government to deploy the business from the ground. Designed the structure of the ERP that was used to control all areas and retrieve the data for the reports.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShowJucai(false)} variant="outline-warning">
                Close me!!
              </Button>
            </div>
          </Alert>
        </div>
        <hr />
        <div>
          <Alert show={showOthers} variant="info">
            <Alert.Heading>Duro Felguera / Geodis Wilson</Alert.Heading>
            <p>
              Business administration / intelligence - help foreign companies that started their business in Rio de Janeiro doing the administration activities and help the finance area with the stakeholders and to prepare their reports.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShowOthers(false)} variant="outline-info">
                Close me!!
              </Button>
            </div>
          </Alert>
        </div>
      </>
    );
  }
  
  export default Rio;