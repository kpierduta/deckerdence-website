import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const PageTitle = ({ title }) => (
  <Section className="hero section is-normal">
    <div className="container">
      <div className="columns is-centered is-mobile">
        <div className="column is-narrow has-text-centered">
          <div className="left">
            <figure className="image is-32x32">
              <img src="/images/hire/black-one.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="column is-narrow has-text-centered">
          <div className="center">
            <h1 className="title is-4 has-text-black">{title}</h1>
          </div>
        </div>
        <div className="column is-narrow has-text-centered">
          <div className="right">
            <figure className="image is-32x32">
              <img src="/images/hire/black-two.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default PageTitle;
