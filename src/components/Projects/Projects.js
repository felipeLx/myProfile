import React, {useState, useEffect} from 'react';

import classes from './Projects.module.css'
import Aux from '../../hoc/Aux/Aux'
import projectsList from './projectsList'
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMedia, setIsMedia] = useState(false)
    
    useEffect(() => {
       if(isPlaying){ 
           setTimeout(() => { 
            if(currentIndex === projectsList.length) {
                setCurrentIndex(1)
            } else {
                setCurrentIndex((currentIndex + 1 + projectsList.length) % projectsList.length)
            }
        }, 5000)
        }
    },[isPlaying, currentIndex])

    useEffect(() => {
        let screenSize = window.screen.width
        if(screenSize < 450) {
            setIsMedia(true)
        }
    },[window.screen.width])

    const handleSelect = (selectedIndex, project) => {
        setCurrentIndex(selectedIndex)
    }

    
  return(
        <Aux>
            <section className={classes.Projects} >
            
            <Button 
                variant="info"
                onClick={() => window.open('https://github.com/felipeLx', '_blank')}
            >Much more projects can be found in my GitHub</Button>
        
            <hr />
            
            <div style={{width: '100%'}} activeIndex={currentIndex} onSelect={handleSelect}>
                <div className={classes.Stage}>
                    <div className={classes.Carousel}>
                            <div>
                                <div className={classes.Before}>
                                {currentIndex-1 >= 0 && !isMedia ? 
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex-1].image} />
                                    <Card.Body>
                                    <Card.Title>{projectsList[currentIndex-1].title}</Card.Title>
                                    <Card.Text>
                                        {projectsList[currentIndex-1].description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex-1].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>
                                </Card> : null}
                            </div>
                            <div className={classes.Middle}>
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex].image} />
                                    <Card.Body>
                                    <Card.Title>{projectsList[currentIndex].title}</Card.Title>
                                    <Card.Text>
                                        {projectsList[currentIndex].description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>
                                </Card>
                                
                            </div>
                            <div className={classes.After}>
                                {currentIndex+1 < projectsList.length && !isMedia ? <Card style={{ width: '18rem'}}>
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex+1].image} />
                                    <Card.Body>
                                    <Card.Title>{projectsList[currentIndex+1].title}</Card.Title>
                                    <Card.Text>
                                        {projectsList[currentIndex+1].description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex+1].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>
                                </Card> : null}
                                
                                </div>
                            </div>
                    </div>
                </div>
                <div className={classes.Controls}>
                    {currentIndex -1 > 0 ?
                        <button onClick={() => setCurrentIndex((currentIndex -1 + projectsList.length) % projectsList.length)}><i class="far fa-backward"></i></button> :
                        <button disabled><i class="far fa-backward"></i></button>
                    }
                        {isPlaying ? <button onClick={() => setIsPlaying(false)}><i class="far fa-pause-circle"></i></button> :
                                     <button onClick={() => setIsPlaying(true)}><i class="far fa-play-circle"></i></button> }
                {currentIndex+1 < projectsList.length ?
                    <button onClick={() => setCurrentIndex((currentIndex +1 + projectsList.length) % projectsList.length)}><i class="fas fa-forward"></i></button> :
                    <button disabled><i class="fas fa-forward"></i></button>
                }
            </div>
            </div>
            
            </section>
        </Aux>
    )
};

export default Projects;