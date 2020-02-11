import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.towbgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .thumbnail {
    position: relative;
    margin-bottom: 0;
    border: 0;
  }

  .caption {
    position: absolute;
    top: 33.33%;
    left: 0;
    width: 100%;
  }
`;

const TowBar = ({ towbgImage }) => (
  <Section className="section is-block is-medium" towbgImage={towbgImage}>
    <div className="columns is-centered is-desktop">
      <div className="column is-8">
        <div id="box-search">
          <div className="thumbnail text-center">
            <img src="/images/towbar/frame@2x.png" alt="" />
            <div className="caption">
              <h1 className="title is-3 has-text-centered has-text-white is-size-4-mobile has-text-weight-normal">
                Event Hire
              </h1>
              <h1 className="subtitle is-3 has-text-centered has-text-white is-size-6-mobile">
                With Deckerdence or on its own
              </h1>
              <p className="subtitle is-5 has-text-centered has-text-white is-size-6-mobile">
                The Tow Bar can be hired full staffed and stocked or dry hire is
                also available. Dry hire options include delivery and collection
                to you location.
              </p>
              <div className="has-text-centered">
                <button className="button is-light is-medium" type="button">
                  Enquire Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default TowBar;
