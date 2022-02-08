import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import SocialIcons from './global/SocialIcons';

export const footerQuery = graphql`
  query footer {
    allSanityVehicleHirePage(sort: { fields: order }) {
      edges {
        node {
          slug {
            current
          }
          _id
          footerTitle
        }
      }
    }
    allSanityGalleryPage(sort: { fields: order }) {
      edges {
        node {
          slug {
            current
          }
          _id
          footerTitle
        }
      }
    }
  }
`;

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
      <StaticQuery
        query={footerQuery}
        render={data => {
          const {
            allSanityVehicleHirePage: hire,
            allSanityGalleryPage: gallery,
          } = data;

          return (
            <>
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
              {/* <FooterWrapper className="columns is-centered">
                <div className="column is-7">
                  <div className="content has-text-centered">
                    <p className="is-size-6 is-capitalized">
                      ©Deckerdence 2020. All Rights Reserved. |
                      <Link to="/terms&condition">Terms & Conditions |</Link>
                      <Link to="/privacy-policy"> Privacy Policy |</Link>
                      <a href="https://www.kpdigitalstrategy.com/">
                        Website by kp digital strategy.
                      </a>
                    </p>
                  </div>
                </div>
              </FooterWrapper> */}
            </>
          );
        }}
      />
    </div>
  </Container>
);

export default Footer;
