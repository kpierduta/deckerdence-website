import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  .overlay {
    overflow: hidden;
    background-color: #000;
    height: 100%;
  }
  img {
    object-fit: cover;
    opacity: 0.4;
  }
  .content {
    position: absolute;
    top: 15rem;
    width: 100%;
  }
`;

const GalleryImageItem = () => (
  <Container className="column is-4">
    <div className="overlay">
      <img src="/images/gallery/photo-2@2x.png" alt="" />
      <div className="content has-text-centered">
        <div className="has-text-white">THE PERFECT VENUE</div>
        <img src="/images/gallery/decorative-line@2x.png" alt="" />
      </div>
    </div>
  </Container>
);

export default GalleryImageItem;
