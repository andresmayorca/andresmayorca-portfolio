import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <title>Andres Mayorca | Portfolio</title>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello! My name is Andres, i'm 14 years-old. I'm a passionate about the new technologies y more 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;