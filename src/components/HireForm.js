import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Wrapper = styled.div`
  .background {
    background-color: ${props => props.theme.mainBrandColor}!important;
  }
`;

const HireForm = ({ avatar }) => (
  <Wrapper>
    <section className="section background">
      <div className="container">
        <div className="columns ">
          <div className="column is-5-desktop">
            <figure className="image is-3by2">
              <img className="is-rounded" src={avatar} alt="" />
            </figure>
          </div>
          <div className="column is-vcentered is-desktop has-text-centered-touch">
            <ContactForm
              pera="By submitting this form you agree to our contact terms and
              conditions."
            />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);

export default HireForm;
