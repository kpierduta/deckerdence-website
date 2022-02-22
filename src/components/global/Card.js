import React from 'react';
import styled from 'styled-components';
import SanityImage from './SanityImage';
import PortableText from '../elements/PortableText';

const Wrapper = styled.div`
  background: ${props =>
    `url(${
      props.isReverse
        ? '/images/decoration-light.png'
        : '/images/decoration-dark.png'
    })`};
  background-size: 100% 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Card = ({ data }) => {
  return (
    <section
      className={`section  ${
        data.columnReverse ? 'has-background-grey-teal' : 'has-background-white'
      }`}
    >
      <div className="container">
        <div
          className={`columns is-vcentered  ${data.columnReverse &&
            'is-flex-direction-row-reverse'}`}
        >
          <div className="column is-4">
            {data.image && (
              <SanityImage
                fluid={data.image.asset.id}
                className="is-rounded"
                alt={data.title}
              />
            )}
          </div>
          <div className="column is-2 is-desktop" />
          <Wrapper className="column hero" isReverse={data.columnReverse}>
            <div className="py-5 my-5 px-0">
              {data.title && (
                <h1
                  className={`title is-4 mt-3  ${
                    data.columnReverse ? 'has-text-white' : 'has-text-black'
                  }`}
                >
                  {data.title}
                </h1>
              )}
              <PortableText light={data.columnReverse}>
                {data.description}
              </PortableText>
              <div className="is-flex mt-4">
                <p
                  className={`subtitle mr-3 ${
                    data.columnReverse ? 'has-text-white' : 'has-text-black'
                  }`}
                >
                  {data.name}
                </p>
                <p
                  className={`subtitle ${
                    data.columnReverse ? 'has-text-white' : 'has-text-black'
                  }`}
                >
                  {data.date}
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};

export default Card;
