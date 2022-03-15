import React, { useState } from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';

const Section = styled.div`
  .main {
    position: relative;
    cursor: pointer;
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

const Figure = styled.figure`
  img {
    object-fit: cover;
    height: 450px !important;
  }
`;

const GalleryItem = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <Section className="column is-4">
      <div className="main" onClick={() => setActive(true)} role="button">
        <Figure className="image">
          <SanityImage
            fluid={data.image.asset.id}
            alt={data.title}
            width={2000}
          />
        </Figure>
        <div className="overlay">
          <div className="text">
            <h1 className="title is-4 has-text-white has-text-centered">
              {data.title}
            </h1>
          </div>
        </div>
      </div>
      <div className={active ? 'modal is-active' : 'modal is-close'}>
        <div className="modal-background" />
        <div className="modal-content">
          <figure className="image">
            <SanityImage fluid={data.image.asset.id} alt={data.title} />
          </figure>
        </div>
        <button
          label="button"
          type="button"
          className="modal-close is-large"
          onClick={() => {
            setActive(false);
          }}
        />
      </div>
    </Section>
  );
};

export default GalleryItem;
