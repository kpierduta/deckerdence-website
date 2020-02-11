import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .column {
    background-image: url('/images/hire/bgframe.png');
    background-size: cover;
    margin: 0 0.5rem;
    min-height: 9rem;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

const OptionToIncludes = () => {
  return (
    <Section className="">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column">
            <h2 className="title is-3 is-capatalized has-text-weight-normal">
              vintage bus bar
            </h2>
          </div>
          <div className="column">
            {' '}
            <h2 className="title is-3 is-capatalized has-text-weight-normal">
              traditional bar
            </h2>
          </div>
          <div className="column">
            {' '}
            <h2 className="title is-3 is-capatalized has-text-weight-normal">
              cocktail lounge
            </h2>
          </div>
          <div className="column">
            {' '}
            <h2 className="title is-3 is-capatalized has-text-weight-normal">
              side awning
            </h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OptionToIncludes;
