import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
`;
const Linkstyled = styled(Link)`
  .subtitle {
    padding-bottom: 5px;
    border-bottom: 1.5px solid;
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="container">
      <div className="has-text-centered">
        <Link to="/">
          <img src="/images/icon/facebook.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/images/icon/twitter.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/images/icon/linked-in.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/images/icon/instagram.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/images/icon/pinterest.png" alt="" />
        </Link>
      </div>
      <div className="columns has-text-centered is-variable is-6">
        <div className="column">
          <Link to="/">
            <h3 className="title is-3 is-spaced">CONTACT</h3>
          </Link>
          <Linkstyled to="/">
            <h4 className="subtitle is-5">Tel: 01675 463 555</h4>
          </Linkstyled>
          <Linkstyled to="/">
            <h4 className="subtitle is-5">Email: enquiries@deckerdence.com</h4>
          </Linkstyled>
          <Linkstyled to="/">
            <h4 className="subtitle is-5">
              Blyth Hall Farm, Blythe Road, Coleshill, Birmingham, B46 2AF
            </h4>
          </Linkstyled>
          <Link to="/">
            <h4 className="subtitle is-5">Viewings By Appointment Only</h4>
          </Link>
        </div>
        <div className="column">
          <Link to="/">
            <h3 className="title is-3 is-spaced">HIRE OPTIONS</h3>
          </Link>
          <Linkstyled to="/hirePage">
            <h4 className="subtitle is-5">Vintage Bus Bar</h4>
          </Linkstyled>
          <Linkstyled to="/sideAwning">
            <h4 className="subtitle is-5">Bus bar With Awning Hire</h4>
          </Linkstyled>
          <Linkstyled to="/hirePage">
            <h4 className="subtitle is-5">Bus Bar Half Wraparound Marquee</h4>
          </Linkstyled>
          <Link to="/hirePage">
            <h4 className="subtitle is-5">
              Bus Bar with Full Wraparound Marquee
            </h4>
          </Link>
        </div>
        <div className="column">
          <Link to="/">
            <h3 className="title is-3 is-spaced">THE GALLERY</h3>
          </Link>
          <Linkstyled to="/wedding">
            <h4 className="subtitle is-5">Our Wedding Gallery</h4>
          </Linkstyled>
          <Linkstyled to="/">
            <h4 className="subtitle is-5">Our Events Gallery</h4>
          </Linkstyled>
          <Linkstyled to="/">
            <h4 className="subtitle is-5">Our Hospitality Gallery</h4>
          </Linkstyled>
          <Link to="/partiesPage">
            <h4 className="subtitle is-5">Our Party Gallery</h4>
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
