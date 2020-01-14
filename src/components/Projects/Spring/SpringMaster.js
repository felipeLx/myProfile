import React from 'react';
import { Card, Button } from 'react-bootstrap';

import img from '../../../assets/images/javaLogo.jpg';
import classes from '../Projects.module.css';

const SpringMaster = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/baeldung.Spring';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src={img} />
    <Card.Body className={classes.Projects}>
      <Card.Title>Java</Card.Title>
      <Card.Text>
        Java using Spring and mySQL to build MVC, made in the course at Baeldung.
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
    </Card.Body>
  </Card>
    );
  };

export default SpringMaster;