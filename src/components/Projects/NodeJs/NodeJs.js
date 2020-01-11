import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from '../Projects.module.css';

const NodeJs = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/nodeJsSample';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src="https://lh3.googleusercontent.com/Qg7hnnNMlz6B0PgtA3J9hjobZyEdlfw-eRSvnMWvUwX-Cy2-Vyl3JSy2nQGTaRKchoJU1SMraaRNYMjg0PVuShio4vRlzjQIUjP9wdWxE9qqPKx1s264Ilqo6HSqHICUijebamseoMUEdU44HcgLKPyL4baZec3xikFSPyrt4fEMAoQyJ5iytD78Rl5jwWlASV2TIWJRfWLhSN3AMxLe_jUl6CZXuB_DkT20FLuAcLvNXhmrOlIG8Snf3Ph57NvjG86Zk-LSEHcPu1q4TuZ3oW5T59HH5Krq9g0JrdNUyq6HTzqGH7gEM5WNv-XU6s5wnND9iVfuAy-edw7EE4s3MRTBYGcIMYqvTxO2yI6zxo_9xpgNF_f18Ze9bqsGy1V7x2cL4UfANqu040h4eSUA1k_WlAJgiKUm84jaujb82k2G1bJlQJ4NorPjEVY_l8TURrnSXIJbV_eJJRjRB2cD2ryEkY2tgP7RGkhuq2CkL0oPcbsR9t5koY1PTN_ScalsVeVX8-mILyOqAdMsN2hjpk2IScjqE4s-UcCKWbGQ-R_SXJUUZGzH1wBEIuBbr5LNv-jB4g8JlHVhzASOTegbADWaMT7ic8ymowYKQclFmCtsJBfxdiJeWJi44wPuiMSImYIDSSlW77goCZOeTB2Z3bvHL-R0aob5b8dYwIyC5tBhFpDIuqIOVj4=w286-h183-no" />
    <Card.Body className={classes.Projects}>
      <Card.Title>NodeJs</Card.Title>
      <Card.Text>
        NodeJs - MVC Rest learned in course with Microsoft in the EDX platform.
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
    </Card.Body>
  </Card>
    );
  };

export default NodeJs;