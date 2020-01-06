import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/gallery/toppage.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
const PageHeading = props => {
  const { title } = props;

  return (
    <Section className="section hero is-normal">
      <div className="container">
        <div className="columns is-centered">
          <div className="column has-text-centered">
            <h1 className="title is-1 has-text-white">{title}</h1>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PageHeading;
