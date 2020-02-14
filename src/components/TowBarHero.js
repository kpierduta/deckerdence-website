import React from 'react';
import styled from 'styled-components';

import ButtonGlobal from './elements/ButtonGlobal';

const Section = styled.div`
  background-image: url(${props => props.towBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .column {
    background-image: url(/images/towbar/frame@2x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
    justify-content: center;
    display: grid;
    padding: 3rem 12rem;
    @media screen and (max-width: 768px) {
      padding: 3rem 3rem;
    }
  }
  .title {
    margin-top: 8rem;
  }
  .button-wrapper {
    padding-bottom: 3rem;
  }
`;

const TowBarHero = ({ towBgImage }) => (
  <Section className="section is-large" towBgImage={towBgImage}>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <h1 className="title is-3 has-text-centered has-text-white is-size-4-mobile has-text-weight-normal">
            Event Hire
          </h1>
          <h1 className="subtitle is-3 is-uppercase has-text-weight-bold has-text-centered has-text-white is-size-4-mobile">
            With Deckerdence or on its own
          </h1>
          <p className="subtitle is-5 has-text-centered has-text-white is-size-6-mobile">
            The Tow Bar can be hired full staffed and stocked or dry hire is
            also available. Dry hire options include delivery and collection to
            you location.
          </p>
          <div className="has-text-centered button-wrapper">
            <ButtonGlobal title="Enquire Today" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default TowBarHero;
