import React from 'react';

import ReactBurger from './React/ReactBurger';
import SpringMaster from './Spring/SpringMaster';
import NodeJs from './NodeJs/NodeJs';
import JavaScript from './JavaScript/JavaScript';
import { Row, Col } from 'react-bootstrap';

const Projects = () => (
    <div>
        <Row>
        {/* <div style={{width: '80%', padding:'20px', display: 'inline-block'}}> */}
            <Col><ReactBurger /></Col>
            <Col><JavaScript /></Col>
            <Col><NodeJs /></Col>
            <Col><SpringMaster /></Col>
        {/* </div> */}
        </Row>
    </div>
    );

export default Projects;