import React from 'react';
import { Card, Button } from 'react-bootstrap';
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
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src="https://lh3.googleusercontent.com/IXzD15KB5ZxlAZca_VH3wLT0ENEmzzdT9WkR1f1bCAyNCETFicsiypZlGp1FhFLa5dYBkwSFpX0vU3pjc5cSQdECWk4YdAGXTR1HS9kUnpzg12YvS-xN9wnlFF_6sySd9bqiDIn8EmjrVA4_mPGkpgc1oAsUsAqY_ODBBsGD4mOtZnfLrKYA9G8jfalF9MhEMdGY5JR0zl98kKWpP18QEts19S592ulfakr0zlRUtSDslwzEHJa2sh7xVQwxF07EeSWdM9RmluHhPg6zBRrWWgOMATSioqTYzEzc6of-ZhDhuGn6LyOaazdI80eC3zCWv4Beuc_3ORRyPpN15Pquaex1TYWaPx5_MziTrbN0yi949JeyU8uCV7jc6AmsyK10Yqmxiqs_z1O2mBZS9CyNdXdapU6S0tApBP2oZB81BbBw7WFsnQym0xSTjiWdJxMryjTCqVlw8EcHIs54QkN6psJ2eo8j-CKIq9PVIKP5egjHh-JaFs-dap3ZxpxjV88vnUnWAEqwnVUSoI2YId2rfKV67am-6ZbhEG-Ku_0B27fXvyPj266XLrDxR7NvacwaHFep_fKncCnLs-yl6OCXL7FX85y7XBepX_myfLNP5erQxQSw1Q4qP4r34hx27jB2HnnNTEgqXU-CcD-cqzsxp3iW_drIoz8Nx9nYQ7vG8H3WISirv6ALy48=w400-h256-no"/>
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