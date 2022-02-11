import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    font-size: ${props => props.theme.fontSizeExtraLarge}px;
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

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.theme.lightAccent};
`;

const data2 = [
  { key: 5, linkTo: '/', name: 'HOME' },
  { key: 6, linkTo: '/hire', name: 'HIRE OPTIONS' },
  // {
  //   key: 7,
  //   linkTo: '/vintage-bus-bar-hire/unique-wedding-venue',
  //   name: 'WEDDINGS',
  //   hidden: true,
  // },
  // {
  //   key: 8,
  //   linkTo: '/vintage-bus-bar-hire/party-venue-birmingham',
  //   name: 'PARTIES',
  //   hidden: true,
  // },
  // {
  //   key: 9.2,
  //   linkTo: '/vintage-bus-bar-hire/event-venue',
  //   name: 'EVENTS',
  //   hidden: true,
  // },

  // {
  //   key: 10,
  //   linkTo: '/vintage-bus-bar-hire/hospitality',
  //   name: 'HOSPITALITY',
  //   hidden: true,
  // },

  // { key: 11, linkTo: '/our-tow-bar', name: 'ADDITIONAL SERVICES' },
  { key: 12, linkTo: '/about', name: 'About' },
  // { key: 13, linkTo: '/testimonials', name: 'Testimonials' },
  // { key: 13.3, linkTo: '/journal', name: 'JOURNAL' },
  // { key: 14, linkTo: '/contact', name: 'CONTACT' },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section className="section is-normal">
      <div>
        <ContactWrapper className="columns is-hidden-touch">
          <div className="column is-flex navbar-end">
            <Button type="button" className="px-4 is-capitalise">
              Book a call with us
            </Button>
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
              {data2.map(item => {
                return (
                  <Link
                    to={item.linkTo}
                    className={`navbar-item ${item.hidden &&
                      'is-hidden-desktop'}`}
                    key={item.key}>
                    {item.name}
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
