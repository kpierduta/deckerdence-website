import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/gallery/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const PageHeading = props => {
  const { title, subTitle } = props;

  return (
    <Section className="section  is-normal">
      <div className="container">
        <div className="columns is-centered">
          <div className="column has-text-centered">
            {title && (
              <h1 className="title is-3 has-text-white is-spaced">{title}</h1>
            )}
            {subTitle && (
              <h1 className="subtitle is-4 has-text-white has-text-centered">
                {subTitle}
              </h1>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PageHeading;
