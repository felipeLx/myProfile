import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from '../Projects.module.css';

const NodeJs = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/javascriptPure';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src="https://lh3.googleusercontent.com/UedOIaEpgYp5UVeOJde_cWesLj7_YuhT_raLoiu3eOkTOjRzLa1iFFjYAmHuYFHI5csGuEv8lIOsP5ikMn1WWkVhwXV3E8BaIK96uLy9jlwOIFeaOh7UFId1yDOfF1zMPieF_rW1pJd_nsWg4nCW50z9dciLMprrVKg0Ek84kroXy-6fB4J7QyIYinQHseqPyaPBhDts3k76iDMTXI3WCetUQVW3bEkQhYXZ28cpUfIKooGtMuI9aX-N7_4zm2KcXaO_CBUVhVfYa1oPsXuHr4j_NNrNcYoKkDoujHNkNXqCw5pQFnjkCXdNTUGwmeUUbwoHx5l0gmiOQviq7LOM8ldHW_ljh03oSWUcTVvBfOgzwdd68Z-o_4aR430ItJ0u7ClDo86-T67hv16ZRbOKAOzNUsZKLfwQHnvEbXKharSQIxOBKY-cqy3V8YJFfuDXB40R015vfjnc6LXiE_f74FuoW2VyZVPVyYLQNv05PtGSS4i9YL_wUkHQ0vB2QgxnWGgSM0IKE1NjgrmCGhZOTJVwHELbAkA1B7LKMmz2clc3ypqgfjj4L835fmhGf0Eqr6pry4fYzE9zoAlV2wSlX8aLnhADKZBtZI724wFnatWYNMBwz_dw3yMo5TeWLP-Do5dI99g3z0wK1dHd2VLW3DxZNcv_idlj0ur_7UX03BoAqRiFC_xf3dk=w286-h183-no" />
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

export default NodeJs;