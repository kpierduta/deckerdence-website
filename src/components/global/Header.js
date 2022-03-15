import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ButtonGlobal } from '../elements';

const Section = styled.section`
  padding: 0rem 1.5rem 1.22rem 1.5rem;
  .navbar {
    background-color: transparent;
  }
  .logo {
    max-height: 9.5rem !important;
    height: auto;
    margin-left: -0.5rem;
    @media screen and (max-width: 768px) {
      max-height: 4rem !important;
    }
  }
  .navbar-end {
    margin-top: 1rem;
  }
  .navbar-item {
    font-family: ${props => props.theme.secondaryFontFamily} !important;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: ${props => props.theme.fontSizeExtraLarge};
    height: 3rem;
    color: ${props => props.theme.textColorLite};
    :hover {
      color: ${props => props.theme.mainBrandColor} !important;
      background: transparent;
    }
    :focus {
      background: transparent;
      color: ${props => props.theme.mainBrandColor} !important;
    }
  }
  .navbar-burger {
    background-color: ${props => props.theme.mainBrandColor};
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .is-flex {
    justify-content: flex-end;
  }

  .navbar-menu {
    padding: 0.5rem !important;
  }
`;

const ContactWrapper = styled.div`
  margin-bottom: -0.2rem !important;
  margin-top: 1rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  color: ${props => props.theme.textColorLite};
`;

const query = graphql`
  query headerNavigation {
    sanityNavigation {
      _id
      navigation {
        _key
        label
        linkTo
      }
      buttonLabel
      buttonLinkTo
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { sanityNavigation: data } = useStaticQuery(query);

  return (
    <Section className="section is-normal">
      <div>
        <ContactWrapper className="columns is-hidden-touch">
          <div className="column is-flex navbar-end">
            <ButtonGlobal to={data.buttonLinkTo} title={data.buttonLabel} />
          </div>
        </ContactWrapper>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img className="logo" src="/images/logo.jpg" alt="site logo" />
            </Link>
            <a
              href="#"
              role="button"
              className={isActive ? 'navbar-burger is-active' : 'navbar-burger'}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => {
                setIsActive(!isActive);
              }}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              {data &&
                data.navigation.map(item => {
                  return (
                    <Link
                      to={item.linkTo}
                      className="navbar-item"
                      key={item._key}>
                      {item.label}
                    </Link>
                  );
                })}
            </div>
          </div>
        </nav>
      </div>
    </Section>
  );
};
export default Header;
