import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <title>Andres Mayorca</title>
    <LeftSection>
      <SectionTitle main center>
        Hello, Gm  <br />
        I'm Andrés Mayorca | Ethcode
      </SectionTitle>
      <SectionText>
      Hi, I'm Andres and i'm Blockchain Developer & Full Stack web Developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://twitter.com/ethcode'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;