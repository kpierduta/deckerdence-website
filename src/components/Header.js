/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem 3rem 1.5rem;
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
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 1rem;
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

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section is-normal">
        <div>
          <ContactWrapper className="columns is-hidden-touch">
            <div className="column is-flex navbar-end">
              <Link
                to="/vintage-bus-bar-hire/unique-wedding-venue"
                className="navbar-item"
              >
                WEDDINGS
              </Link>
              <Link
                to="/vintage-bus-bar-hire/party-venue-birmingham"
                className="navbar-item"
              >
                PARTIES
              </Link>
              <Link
                to="/vintage-bus-bar-hire/event-venue"
                className="navbar-item"
              >
                EVENTS
              </Link>
              <Link
                to="/vintage-bus-bar-hire/hospitality"
                className="navbar-item"
              >
                HOSPITALITY
              </Link>
            </div>
          </ContactWrapper>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img className="logo" src="/images/logo.jpg" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive ? 'navbar-burger is-active' : 'navbar-burger'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  HOME
                </Link>
                <Link to="/hire" className="navbar-item">
                  HIRE OPTIONS
                </Link>
                <Link
                  to="/vintage-bus-bar-hire/unique-wedding-venue"
                  className="navbar-item is-hidden-desktop"
                >
                  WEDDINGS
                </Link>
                <Link
                  to="/vintage-bus-bar-hire/party-venue-birmingham"
                  className="navbar-item is-hidden-desktop"
                >
                  PARTIES
                </Link>
                <Link
                  to="/vintage-bus-bar-hire/event-venue"
                  className="navbar-item is-hidden-desktop"
                >
                  EVENTS
                </Link>
                <Link
                  to="/vintage-bus-bar-hire/hospitality"
                  className="navbar-item is-hidden-desktop"
                >
                  HOSPITALITY
                </Link>
                <Link to="/towBar" className="navbar-item">
                  EXTRAS
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/testimonial" className="navbar-item">
                  Testimonials
                </Link>
                <Link to="/blog" className="navbar-item">
                  JOURNAL
                </Link>
                <Link to="/contact" className="navbar-item">
                  CONTACT
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
