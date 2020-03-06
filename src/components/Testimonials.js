import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .hvrbox,
  .hvrbox * {
    box-sizing: border-box;
  }
  .hvrbox {
    position: relative;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }
  .hvrbox img {
    max-width: 100%;
  }
  .hvrbox .hvrbox-layer_bottom {
    display: block;
  }
  .hvrbox .hvrbox-layer_top {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 15px;
    transition: all 0.4s ease-in-out 0s;
  }
  .hvrbox:hover .hvrbox-layer_top {
    opacity: 1;
  }
  .hvrbox .hvrbox-text {
    text-align: center;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .hvrbox.active .hvrbox-text_mobile {
    display: block;
  }
`;

const Testimonials = ({ Image, title }) => (
  <Section className="column is-4">
    <div className="hvrbox">
      <img src={Image} alt="images" className="hvrbox-layer_bottom" />
      <div className="hvrbox-layer_top">
        <div className="hvrbox-text">
          <h1 className="title is-2 has-text-white has-text-centered is-size-4-touch">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default Testimonials;
