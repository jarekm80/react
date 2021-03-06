import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={settings.Info.title} image={settings.Info.image} />

    <p>{settings.Info.description}</p>
  </Container>
);

 

export default Info;