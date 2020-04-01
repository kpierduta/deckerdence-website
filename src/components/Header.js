/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 5.75rem;
      @media screen and (max-width: 768px) {
        max-height: 3.75rem;
      }
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-size: 1.25rem;
    color: #000;
    :hover {
      color: ${props => props.theme.darkAccent};
      background-color: transparent;
    }
    :focus {
      background-color: transparent;
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .navbar-item :hover {
    color: ${props => props.theme.mainBrandColor};
  }
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
      <Section className="section">
        <div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo.jpg" alt="Deckerdence Logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
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
                <Link to="/weddings" className="navbar-item">
                  WEDDINGS
                </Link>
                <Link to="/parties" className="navbar-item">
                  PARTIES
                </Link>
                <Link to="/events" className="navbar-item">
                  EVENTS
                </Link>
                <Link to="/hospitality" className="navbar-item">
                  HOSPITALITY
                </Link>
                <Link to="/towBar" className="navbar-item">
                  TOW BAR
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
