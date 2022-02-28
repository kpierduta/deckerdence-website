import React from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';

const Wrapper = styled.div``;

const HeroBanner = ({ image }) => {
  console.log('image', image);
  return (
    <Wrapper>
      {image && image[0] && (
        <SanityImage fluid={image[0].asset.id} width={5000} />
      )}
      <div className="columns mt-4">
        <div className="column">
          {image && image[1] && (
            <SanityImage fluid={image[1].asset.id} width={5000} />
          )}
        </div>
        <div className="column">
          {image && image[2] && (
            <SanityImage fluid={image[2].asset.id} width={5000} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBanner;
