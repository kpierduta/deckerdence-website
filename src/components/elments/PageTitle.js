import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;
const PageTitle = props => {
  const { title } = props;

  return (
    <Section className="hero section is-normal">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow has-text-centered">
            <div className="left">
              <figure className="image is-48x48">
                <img src="/images/hire/red.png" alt="" />
              </figure>
            </div>
          </div>
          <div className="column is-narrow has-text-centered">
            <div className="center">
              <h1 className="title is-1 has-text-black">{title}</h1>
            </div>
          </div>
          <div className="column is-narrow has-text-centered">
            <div className="right">
              <figure className="image is-48x48">
                <img src="/images/hire/red-2.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PageTitle;
