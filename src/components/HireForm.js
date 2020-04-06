import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Wrapper = styled.div`
  .background {
    background-color: ${props => props.theme.mainBrandColor}!important;
  }
`;

const HireForm = ({ para, avatar }) => (
  <Wrapper>
    <section className="section">
      <div className="container is-medium">
        <div className="columns is-centered is-desktop">
          <div className="column is-10">
            <header className="Header has-text-centered">
              <p className="subtitle is-5 para has-text-black">{para}</p>
            </header>
          </div>
        </div>
      </div>
    </section>
    <section className="section background">
      <div className="container">
        <div className="columns ">
          <div className="column is-5-desktop">
            <figure className="image is-3by2">
              <img className="is-rounded" src={avatar} alt="" />
            </figure>
          </div>
          <div className="column is-vcentered is-desktop">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);

export default HireForm;
