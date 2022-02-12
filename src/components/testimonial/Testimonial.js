import React from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';
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

const Testimonial = props => {
  const { testimonial = {} } = props;
  return (
    <section
      className={`section  ${
        testimonial.columnReverse
          ? 'has-background-grey-teal'
          : 'has-background-white'
      }`}>
      <div className="container">
        <div
          className={`columns is-vcentered  ${testimonial.columnReverse &&
            'is-flex-direction-row-reverse'}`}>
          <div className="column is-4">
            {testimonial.image && (
              <SanityImage
                fluid={testimonial.image.asset.id}
                className="is-rounded"
                alt={testimonial.title}
              />
            )}
          </div>
          <div className="column is-2 is-desktop" />
          <Wrapper
            className="column hero"
            isReverse={testimonial.columnReverse}>
            <div className="py-5 my-5 px-0">
              {testimonial.title && (
                <h1
                  className={`title is-4 mt-3  ${
                    testimonial.columnReverse
                      ? 'has-text-white'
                      : 'has-text-black'
                  }`}>
                  {testimonial.title}
                </h1>
              )}
              <PortableText light={testimonial.columnReverse}>
                {testimonial.description}
              </PortableText>
              <div className="is-flex mt-4">
                <p
                  className={`subtitle mr-3 ${
                    testimonial.columnReverse
                      ? 'has-text-white'
                      : 'has-text-black'
                  }`}>
                  {testimonial.name}
                </p>
                <p
                  className={`subtitle ${
                    testimonial.columnReverse
                      ? 'has-text-white'
                      : 'has-text-black'
                  }`}>
                  {testimonial.date}
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
