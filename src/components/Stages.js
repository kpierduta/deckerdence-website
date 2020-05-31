import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.div`
  .title {
    padding: 2rem 0 0;
  }

  .button {
    margin: 10px 0px 0px 0px;
    border: 2px solid ${props => props.theme.darkShades};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
  .image.is-128x128 {
    height: 14rem;
    width: 14rem;
  }
`;

const Stages = ({ title, subtitle, image, to }) => (
  <Section className="column is-flex">
    <div className="card-content">
      <div className="card-image">
        <ImageWrapper className="media align">
          <figure className="image is-128x128">
            <img className="is-rounded" src={image} alt="IconImage" />
          </figure>
        </ImageWrapper>
      </div>
      <h2 className="title is-4 is-spaced has-text-centered">{title}</h2>
      {subtitle && (
        <p className="subtitle is-5 has-text-weight-normal has-text-centered">
          {subtitle}
        </p>
      )}
      <p className="has-text-centered">
        <Link to={to} type="button" className="button is-size-6 has-text-black">
          FIND OUT MORE
        </Link>
      </p>
    </div>
  </Section>
);

export default Stages;
