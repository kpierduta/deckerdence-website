import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { PortableText } from '../elements';

const BoxWrapper = styled.div`
  background-color: ${props => props.backgroundColor} !important;
`;

const ContentBlock = props => {
  const { description, backgroundColor = {}, targetButton } = props;

  return (
    <section className="section">
      <div className="container has-text-centered">
        <BoxWrapper
          className="box is-radiusless"
          backgroundColor={backgroundColor.value || '#94272F'}
        >
          {description && (
            <div className="has-text-white has-text-centered py-4">
              <PortableText light={backgroundColor.title === 'Red'}>
                {description}
              </PortableText>
            </div>
          )}
          {targetButton && (
            <Link
              className="button is-danger mt-5 has-text-weight-bold is-uppercase"
              to={targetButton || '/'}
            >
              Find Out More
            </Link>
          )}
        </BoxWrapper>
      </div>
    </section>
  );
};

export default ContentBlock;
