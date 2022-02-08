import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';

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

const socialIcons = [
  { key: '1', icon: '/images/icon/facebook.png', link: config.facebook },
  { key: '2', icon: '/images/icon/twitter.png', link: config.twitter },
  { key: '3', icon: '/images/icon/linked-in.png', link: config.linkedin },
  { key: '4', icon: '/images/icon/instagram.png', link: config.instagram },
  { key: '5', icon: '/images/icon/pinterest.png', link: config.pinterest },
  { key: '6', icon: '/images/icon/youtube.png', link: config.youTube },
];

// const FooterWrapper = styled.div`
//   margin-top: 0rem !important;
// `;

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
                <div className="column is-3">
                  <FooterOption title="Additional services" />
                  <FooterOption title="Journal (blog)" />
                  <FooterOption title="Testimonials" />
                  <FooterOption title="Contact" />
                </div>
                <IconContainer className="column is-6 has-text-centered">
                  <div>
                    {socialIcons.map(item => {
                      return (
                        <a href={item.link} key={item.key}>
                          <img src={item.icon} alt="deckerdence social icon" />
                        </a>
                      );
                    })}
                  </div>
                </IconContainer>
                <div className="column is-3 has-text-right">
                  <FooterOption title="Wedding" />
                  <FooterOption title="Parties" />
                  <FooterOption title="Events" />
                  <FooterOption title="Hospitality" />
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
