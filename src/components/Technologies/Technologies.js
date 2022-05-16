import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider />
    <br />
    <ListTitle>Web Development</ListTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Desing
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experiencie with <br />
            React.js, Next.js, Tailwind y more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experiencie with <br />
            Python, Django, Node,js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiencie with <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <ListTitle>Blockchain Development</ListTitle>
    <SectionText>
    I have experience collaborating on blockchain-based projects using the following technologies
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            Experiencie with <br />
            Solidity, TypeScript, Javascript, node.js, Hardhat, Truffle, Alchemy y more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
