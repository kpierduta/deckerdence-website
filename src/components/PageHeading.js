import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/gallery/toppage.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
const PageHeading = props => {
  const { title, subTitle } = props;

  return (
    <Section className="section hero is-normal">
      <div className="container">
        <div className="columns is-centered">
          <div className="column has-text-centered">
            {title && (
              <h1 className="title is-1 is-size-3-mobile has-text-white is-spaced">
                {title}
              </h1>
            )}
            {subTitle && (
              <h1 className="subtitle is-3 is-size-5-mobile has-text-white has-text-centered">
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
