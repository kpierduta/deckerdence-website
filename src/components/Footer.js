import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';

import FooterOption from './FooterOptions';

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
  padding-bottom: 1rem;
  img {
    width: 4%;
    margin-right: 1.5rem;
    @media screen and (max-width: 767px) {
      margin-right: 0.5rem;
      width: 6%;
    }
  }
`;

const socialIcons = [
  { key: '1', icon: '/images/icon/facebook.png', link: config.facebook },
  { key: '2', icon: '/images/icon/twitter.png', link: config.twitter },
  { key: '3', icon: '/images/icon/linked-in.png', link: config.linkedin },
  { key: '4', icon: '/images/icon/instagram.png', link: config.instagram },
  { key: '5', icon: '/images/icon/pinterest.png', link: config.pinterest },
  { key: '6', icon: '/images/icon/youtube.png', link: config.youTube },
];

const FooterWrapper = styled.div`
  margin-top: 0rem !important;
`;

const Footer = () => (
  <Container className="section is-normal">
    <div className="container">
      <IconContainer className="has-text-centered">
        {socialIcons.map(item => {
          return (
            <a href={item.link} key={item.key}>
              <img src={item.icon} alt="deckerdence social icon" />
            </a>
          );
        })}
      </IconContainer>
      <StaticQuery
        query={footerQuery}
        render={data => {
          const {
            allSanityVehicleHirePage: hire,
            allSanityGalleryPage: gallery,
          } = data;

          return (
            <>
              <div className="columns has-text-centered is-variable is-6">
                <div className="column">
                  <h3 className="title is-5">CONTACT</h3>

                  <FooterOption option="Tel: 01675 463 555" link="/contact" />
                  <FooterOption
                    option="Email: enquiries@deckerdence.com"
                    link="/contact"
                  />
                  <FooterOption
                    option="Blyth Hall Farm, Blythe Road, Coleshill, Birmingham, B46 2AF"
                    link="/contact"
                  />
                  <p className="is-size-7 is-italic	is-capitalized">
                    Viewings By Appointment Only
                  </p>
                </div>
                <div className="column">
                  <h3 className="title is-5">HIRE OPTIONS</h3>
                  {hire.edges.map(items => (
                    <FooterOption
                      key={items.node._id}
                      option={items.node.footerTitle}
                      link={`/${items.node.slug.current}`}
                    />
                  ))}
                </div>
                <div className="column">
                  <h3 className="title is-5">THE GALLERY</h3>
                  {gallery.edges.map(items => (
                    <FooterOption
                      key={items.node._id}
                      option={items.node.footerTitle}
                      link={`/${items.node.slug.current}`}
                    />
                  ))}
                </div>
              </div>
              <FooterWrapper className="columns is-centered">
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
              </FooterWrapper>
            </>
          );
        }}
      />
    </div>
  </Container>
);

export default Footer;
