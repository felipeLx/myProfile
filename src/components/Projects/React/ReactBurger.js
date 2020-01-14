import React from 'react';
import { Card, Button } from 'react-bootstrap';

import img from '../../../assets/images/burger.png';
import classes from '../Projects.module.css';

const ReactBurger = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/ReactBurger';
    window.open(link, '_blank');
  };

  const openApp = () => {
    let link = 'https://react-my-burger-2c7eb.firebaseapp.com/';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src={img} />
    <Card.Body className={classes.Projects}>
      <Card.Title>ReactJS</Card.Title>
      <Card.Text>
        BurgerApp with React, redux, Router, axios and firebase
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
      <Button variant="success" onClick={openApp} style={{marginLeft:'5px'}}>Firebase</Button>
    </Card.Body>
  </Card>
    );
  };

export default ReactBurger;