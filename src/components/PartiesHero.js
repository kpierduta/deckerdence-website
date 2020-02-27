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
  h1 {
    font-size: 4rem;
  }
`;

const PartiesHero = ({ title, partyBgImage, ball }) => (
  <Section className="section is-medium" partyBgImage={partyBgImage}>
    <div className="image-wrapper">
      <figure className="image is-128x128">
        <img src={ball} alt="" />
      </figure>
    </div>
    <div className="columns is-centered is-desktop">
      <div className="column is-7">
        <div className="area">
          <figure className="">
            <img src="/images/parties/t2x.png" alt="frame" />
          </figure>
          <h1 className="title is-size-4-mobile centered has-text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default PartiesHero;
