import React from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';

const Wrapper = styled.div`
  border-radius: 0;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  max-height: 100%;
  .m-auto {
    margin: auto;
  }
  .text-wrapper {
    align-items: center !important;
    justify-content: center !important;
    display: flex !important;
    flex-direction: column !important;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 10;
  }
`;

const HeroBanner = ({ title, description, image, subtitle }) => {
  return (
    <Wrapper className="is-relative">
      <div className="w-full">
        <div className="has-text-center text-white text-wrapper">
          <div className="columns is-centered">
            <div className="column is-9 has-text-centered">
              <h1 className="title is-4 has-text-white has-text-weight-normal">
                {title}
              </h1>
              <h1 className="title is-3 has-text-white has-text-weight-semibold mb-6">
                {subtitle}
              </h1>

              <h1 className="subtitle is-5 has-text-white">{description}</h1>
            </div>
          </div>
        </div>
      </div>
      <SanityImage fluid={image.asset.id} width="5000" />
    </Wrapper>
  );
};

export default HeroBanner;
