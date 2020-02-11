import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/hire/hirebackground.png');
  .frame {
    width: 23rem;
    position: relative;
    top: 0;
    left: 0;
  }
  .image {
    width: 19rem;
    position: absolute;
    top: 2.5625rem;
    right: 6rem;
  }
  .content {
    padding: 3rem 6.5rem;
  }
  .is-inline-block {
    margin: 0rem 1.5rem 2rem 1.5rem;
  }
  .price {
    margin-top: 2rem !important;
  }
`;

const HireLeft = ({ option, title, description, price, frame, image }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8 has-text-centered">
          <section className="section content">
            <div className="container">
              <img src="/images/hire/decoration-1.png" alt="" />
              <div className="is-inline-block">
                <h3 className="title is-3">{option}</h3>
              </div>
              <img src="/images/hire/decoration-2.png" alt="" />
              <h5 className="title is-2 is-spaced">{title}</h5>
              <h5 className="subtitle is-5 has-text-weight-medium has-text-white">
                {description}
              </h5>
              <h3 className="title is-5 price has-text-white">
                hire from {price}
              </h3>
              <button
                className="button is-danger is-large title is-5 has-text-white"
                type="button"
              >
                find out more
              </button>
            </div>
          </section>
        </div>
        <div className="column">
          <img className="frame" src={frame} alt="" />
          <img className="image" src={image} alt="" />
        </div>
      </div>
    </div>
  </Section>
);

export default HireLeft;
