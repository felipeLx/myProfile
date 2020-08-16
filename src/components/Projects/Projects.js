import React, {useState} from 'react';

import classes from './Projects.module.css'
import Aux from '../../hoc/Aux/Aux'
import project from './projectsList.json'
import { Card, Button, Carousel } from 'react-bootstrap';
import Globe from '../Header/globe'

const Projects = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, project) => {
        setIndex(selectedIndex)
    }

    return(
        <Aux>
            <section className={classes.Projects} >
            
            <Button 
                variant="info"
                onClick={() => window.open('https://github.com/felipeLx', '_blank')}
            >Much more projects can be found in my GitHub</Button>
        
            <hr />
            
            <Carousel style={{width: '100%'}} activeIndex={index} onSelect={handleSelect}>
                <div className={classes.Stage}>
                    <div className={classes.Sphere}>
                        <div className={classes.Shadow}></div>
                    </div>
                </div>
            </Carousel>
            </section>
        </Aux>
    )
};

export default Projects;