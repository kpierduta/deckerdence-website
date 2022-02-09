import React from 'react';
import styled from 'styled-components';

import Stages from './Stages';
import Heading from './elements/Heading';

const Section = styled.section`
  background-color: ${props => props.theme.lightAccent};
  .heading {
    margin: 3rem 0;
  }
`;

const BottomMenu = styled.div`
  p {
    padding: 1rem;
  }
  button {
    background-color: ${props => props.theme.mainBrandColor};
    color: ${props => props.theme.lightAccent};
    padding: 0 2.5rem;
    margin-top: 2rem;
    :hover {
      color: ${props => props.theme.lightAccent} !important;
    }
  }
`;

const StagesSection = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="heading">
        <Heading
          heading={data.simpleStages.mainHeading}
          size="is-size-3-mobile"
        />
      </div>
      <div className="columns is-multiline">
        {data.simpleStages.item.map(items => {
          return (
            <Stages
              key={items._key}
              title={items.title}
              subtitle={items.subTitle}
              image={items.avatar.asset.fluid}
              to={items.buttonLink.current}
            />
          );
        })}
      </div>
      <BottomMenu className="has-text-centered">
        <p className="is-size-4">
          Prices shown are for 2022 based at our site in North Warwickshire.
        </p>
        <p className="is-size-4">
          To find out all of the details of what is included in each hire option
          or to learn more about hosting an event at your chosen location click
          the link below.
        </p>
        <button type="submit" className="button title is-5 ">
          <span className="is-size-5-touch is-uppercase">Find out more</span>
        </button>
      </BottomMenu>
    </div>
  </Section>
);

export default StagesSection;
