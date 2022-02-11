import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SocialIcons from './global/SocialIcons';

const Container = styled.section`
  margin-top: 1rem;
  img {
    margin-right: 1.5rem;
    @media screen and (max-width: 768px) {
      margin-right: 1rem;
    }
  }
  .columns {
    margin-top: 2rem;
  }
  p {
    margin-top: 2rem;
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const IconContainer = styled.div`
  align-self: flex-end;
  justify-content: center;
  display: flex;
  img {
    width: 5%;
    margin-right: 1.5rem;
    @media screen and (max-width: 767px) {
      margin-right: 0.5rem;
      width: 6%;
    }
  }
`;

const LinkStyled = styled(Link)`
  h4 {
    padding: 1rem 0;
  }
`;

const FooterOption = ({ title, link }) => (
  <LinkStyled to={link}>
    <h4 className="title is-5 is-uppercase">{title}</h4>
  </LinkStyled>
);

const data1 = [
  { id: 1, title: 'Additional services' },
  { id: 2, title: 'Journal (blog)' },
  { id: 3, title: 'Testimonials' },
  { id: 4, title: 'Contact' },
];
const data2 = [
  { id: 1, title: 'Wedding' },
  { id: 2, title: 'Parties' },
  { id: 3, title: 'Events' },
  { id: 4, title: 'Hospitality' },
];

const Footer = () => (
  <Container className="section is-normal">
    <div className="container">
      <div className="columns is-variable is-6">
        <div className="column is-3 has-text-centered-mobile">
          {data1.map(item => (
            <FooterOption title={item.title} />
          ))}
        </div>
        <IconContainer className="column is-6">
          <SocialIcons />
        </IconContainer>
        <div className="column is-3 has-text-right has-text-centered-mobile">
          {data2.map(item => (
            <FooterOption title={item.title} />
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
