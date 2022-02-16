import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:andrescode21@gmail.com">andresocde21@gmail.com</LinkItem>
      </LinkColumn>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialIcons href="https://github.com/ethcode1" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/ethcode" target="_blank">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCMsffGZQyaHJSrOs6xp_-Zg" target="_blank">
          <AiFillYoutube size="3rem" />
        </SocialIcons>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
