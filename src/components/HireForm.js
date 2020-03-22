import React from 'react';
import styled from 'styled-components';

import Input from './elements/Input';

const Wrapper = styled.div`
  .background {
    background-color: ${props => props.theme.mainBrandColor}!important;
  }
  .pera {
    margin-top: 2rem;
  }
  .text {
    color: ${props => props.theme.lightShades} !important;
  }
`;

const HireForm = ({ para, avatar }) => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <header className="Header has-text-centered">
          <p className="subtitle is-4 para">{para}</p>
        </header>
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
            <Input />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);

export default HireForm;
