import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import FooterOption from './FooterOptions';

const Container = styled.section`
  margin-top: 1rem;
  img {
    margin-right: 1.5rem;
  }
  .columns {
    margin-top: 2rem;
  }
  .is-spaced {
    margin-bottom: 2.5rem;
  }
  p {
    margin-top: 2rem;
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const IconContainer = styled.div`
  padding-bottom: 2rem;
`;

const Footer = () => (
  <Container className="section is-medium">
    <div className="container">
      <IconContainer className="has-text-centered">
        <Link to="/">
          <img src="/images/icon/facebook.png" alt="facebook icon" />
        </Link>
        <Link to="/">
          <img src="/images/icon/twitter.png" alt="twitter icon" />
        </Link>
        <Link to="/">
          <img src="/images/icon/linked-in.png" alt="linkedin icon" />
        </Link>
        <Link to="/">
          <img src="/images/icon/instagram.png" alt="instagram icon" />
        </Link>
        <Link to="/">
          <img src="/images/icon/pinterest.png" alt="pinterest icon" />
        </Link>
      </IconContainer>
      <div className="columns has-text-centered is-variable is-6">
        <div className="column">
          <h3 className="is-size-3 is-spaced">CONTACT</h3>
          <FooterOption option="Tel: 01675 463 555" link="/" />
          <FooterOption option="Email: enquiries@deckerdence.com" link="/" />
          <FooterOption
            option="Blyth Hall Farm, Blythe Road, Coleshill, Birmingham, B46 2AF"
            link="/"
          />
          <p className="is-size-6 is-italic	is-capitalized">
            Viewings By Appointment Only
          </p>
        </div>
        <div className="column">
          <h3 className="is-size-3 is-spaced">HIRE OPTIONS</h3>
          <FooterOption option="Vintage Bus Bar" link="/" />
          <FooterOption option="Bus bar With Awning Hire" link="/" />
          <FooterOption option="Bus Bar Half Wraparound Marquee" link="/" />
          <FooterOption
            option="Bus Bar with Full Wraparound Marquee"
            link="/"
          />
        </div>
        <div className="column">
          <h3 className="is-size-3 is-spaced">THE GALLERY</h3>
          <FooterOption option="Our Wedding Gallery" link="/" />
          <FooterOption option="Our Events Gallery" link="/" />
          <FooterOption option="Our Hospitality Gallery" link="/" />
          <FooterOption option="Our Party Gallery" link="/" />
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
