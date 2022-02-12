import React from 'react';
import styled from 'styled-components';

import PortableText from '../elements/PortableText';

const Wrapper = styled.div`
  flex-direction: ${props => (props.isReverse ? 'row-reverse' : ' ')};
`;

const VenueInfoBlock = ({ venueInfo = [] }) => (
  <section className="section has-background-teal">
    <div className="container">
      {venueInfo.map((item, i) => (
        <div className="">
          <Wrapper className="columns my-5" key={item._key} isReverse={i % 2}>
            <div className="column box p-6">
              <h1 className="title">{item.title}</h1>
              <PortableText>{item.description}</PortableText>
            </div>
            <div className="column empty is-4 is-hidden-mobile" />
          </Wrapper>
        </div>
      ))}
    </div>
  </section>
);

export default VenueInfoBlock;
