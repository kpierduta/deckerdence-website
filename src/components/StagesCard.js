import React from 'react';
import styled from 'styled-components';

import StagesCardItem from './StagesCardItem';

const Section = styled.section`
  background-color: ${props => props.theme.lightAccent};
  .heading {
    margin: 3rem 0;
  }
`;

const StagesCard = ({ infoCardBlock = [] }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {infoCardBlock.map(item => (
            <StagesCardItem
              key={item._key}
              title={item.title}
              image={item.image.asset.url}
              price={item.price}
              subtitle={item.subtitle}
              guests={item.guests}
              mostPopular={item.mostPopular}
              secondary
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StagesCard;
