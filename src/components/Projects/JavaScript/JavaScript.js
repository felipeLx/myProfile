import React from 'react';
import { Card, Button } from 'react-bootstrap';

import img from '../../../assets/images/js.jpg';
import classes from '../Projects.module.css';

const JavaScript = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/javascriptPure';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src={img} />
    <Card.Body className={classes.Projects}>
      <Card.Title>JavaScript</Card.Title>
      <Card.Text>
        JavaScript - 5 games and more examples
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
    </Card.Body>
  </Card>
    );
  };

export default JavaScript;