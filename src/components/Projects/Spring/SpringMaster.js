import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from '../Projects.module.css';

const SpringMaster = () => {

  const openGithub = () => {
    let link = 'https://github.com/felipeLx/baeldung.Spring';
    window.open(link, '_blank');
  };

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img style={{backgroundColor: 'black', opacity: '0.7'}} variant="top" src="https://lh3.googleusercontent.com/mGN5HS-K57eyqnJYhbD8Vg-CfTQ9I5BZxwoI7tprW7euAC6b11ewA_O2YBDsktXpWO94W2-A8xMCnC97aH9hnIjYjfVrG8X6h8nWxFr9sgwriXEO6s1i-AxM0R1utmlRIU0NayJcAMpEW_JU8yOsTWnyjCCWJYzAxhY-tjufq-IcQ_pXVHyWGTQdAAe54X_nawRLWDZmArM2bqYm9iuBepfGOMqoO13enXPmhuSLi3DW-f19smJk1PkuxUitmzwMZno3_jkcTTPGVIeXp7A6a0ZcnU9CofPuSL43YyoUCXDdHaFwaX_kvFj76NRYyyPTZXHH3boWrWlQfWlNJ_KQu50oNZxJBxNzqlCKCE4yfj_LJDoWRwstkgjclMpEwSdjyByw2KiLxfQ45NBTfyIBr5WxOvcZJnXhExQeZz4d4DN5woSU7pn3bmowBtBJo1KKzkVru-EBks_uIKvBjbbLGyK4ZcIjFKvZKtzhfw9BM_X5M15KRjgBXIpQ5bTaDt65mhekt2NLr9nu4d87ogecSGbEgcpCPVNCp33RZ_6mAPVxU2LzbRGnPcLfha_1Xq8WC8SJ3H2R7lvBNDasP4yT8gCX10B6XnM4flSI1-A3CV6tGCsG9rFfpWhPT6XTjS8kXWo6kJUDjXommcg-E_oOJH5XJBBO55xMaSc_RA0tAtuSXP24H_6ZT50=w286-h183-no" />
    <Card.Body className={classes.Projects}>
      <Card.Title>Java</Card.Title>
      <Card.Text>
        Java using Spring to build MVC learned in Bootcamp and course of Baeldung platform.
      </Card.Text>
      <Button variant="primary" onClick={openGithub}>Github</Button>
    </Card.Body>
  </Card>
    );
  };

export default SpringMaster;