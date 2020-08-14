import React from 'react';

import classes from './Projects.module.css'
import ReactBurger from './React/ReactBurger';
import SpringMaster from './Spring/SpringMaster';
import NodeJs from './NodeJs/NodeJs';
import Aux from '../../hoc/Aux/Aux'
import JavaScript from './JavaScript/JavaScript';
import { Row, Col, Button } from 'react-bootstrap';

const Projects = () => (
    
        <Aux>
            <section className={classes.Projects} >
            <Button 
                variant="info"
                onClick={() => window.open('https://github.com/felipeLx', '_blank')}
            >Much more projects can be found in my GitHub</Button>
        
            <hr />
            {/* <Row className={classes.Sphere}>
                <Col><ReactBurger /></Col>
                <Col><JavaScript /></Col>
                <Col><NodeJs /></Col>
                <Col><SpringMaster /></Col>
            </Row> */}
                <div className={classes.Stage}>
                    <figure className={classes.Sphere}>
                        <span className={classes.Shadow}></span>
                    </figure>
                </div>
            </section>
        </Aux>
    );

export default Projects;