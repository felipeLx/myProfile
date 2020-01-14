import React from 'react';
import { Card, Button } from 'react-bootstrap';

import img from '../../../assets/images/nodejs.jpg';
import classes from '../Projects.module.css';

const NodeJs = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/nodeJsSample';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src={img} />
    <Card.Body className={classes.Projects}>
      <Card.Title>NodeJs</Card.Title>
      <Card.Text>
        NodeJs - MVC Rest learned in course with Microsoft at the EDX platform.
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
    </Card.Body>
  </Card>
    );
  };

export default NodeJs;