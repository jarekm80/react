import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.title} image={settings.FAQ.image} />

    <p>{settings.FAQ.description}</p>
  </Container>
);

 

export default FAQ;