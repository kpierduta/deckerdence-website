import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.partyBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0rem 1.5rem 9rem 1.5rem !important;
  .area {
    position: relative;
    text-align: center;
    color: white;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PartiesHero = ({ title, partyBgImage }) => (
  <Section className="section is-medium" partyBgImage={partyBgImage}>
    <div className="image-wrapper">
      <figure className="image is-128x128">
        <img src="/images/parties/disco-ball-copy@2x.png" alt="" />
      </figure>
    </div>
    <div className="columns is-centered">
      <div className="column is-7">
        <div className="area">
          <figure className="">
            <img src="/images/parties/t2x.png" alt="frame" />
          </figure>
          <h1 className="title is-3 is-size-5-touch has-text-white centered">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default PartiesHero;
