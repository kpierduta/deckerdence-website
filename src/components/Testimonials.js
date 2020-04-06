import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .main {
    position: relative;
  }
  .image {
    display: block;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background: rgba(0, 0, 0, 0.6);
  }
  .main:hover .overlay {
    opacity: 1;
  }
  .text {
    font-size: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const Testimonials = ({ Image, title }) => (
  <Section className="column is-4">
    <div className="main">
      <figure className="image is-square">
        <img src={Image} alt="Avatar" className="image" />
      </figure>
      <div className="overlay">
        <div className="text">
          <h1 className="title is-4 has-text-white has-text-centered">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default Testimonials;
