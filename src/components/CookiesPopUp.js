import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  position: fixed;
  bottom: 0rem;
  width: 100%;
  left: 0.01rem;
  padding: 1rem 2rem 0.5rem 1rem;
  background-color: black;
  color: white;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  font-size: 1rem;
  .button {
    margin-top: 1rem;
  }
`;

const CookiesPopUp = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('cookieAccepted') === null) {
      setDisplay(true);
    }
  }, []);

  const setCookie = () => {
    window.localStorage.setItem('cookieAccepted', true);
    setDisplay(!display);
  };

  return (
    <div>
      {display && (
        <Container
          className={display ? 'notification has-text-centered-desktop' : ''}>
          <p className="has-text-white">
            By using our site, you acknowledge that you have read and understand
            our Cookie Policy,{' '}
            <Link to="/privacy-policy"> Privacy Policy,</Link> and our{' '}
            <Link to="/terms&Condition">Terms of Service</Link>.
          </p>
          <button
            type="button"
            onClick={() => setCookie()}
            className="button is-rounded">
            Agree
          </button>
        </Container>
      )}
    </div>
  );
};

export default CookiesPopUp;
