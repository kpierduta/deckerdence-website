import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .overlay {
    overflow: hidden;
    background-color: #000;
    height: 600px;
  }
  img {
    object-fit: cover;
    opacity: 0.4;
  }
`;

const GalleryImageItem = () => (
  <Container className="column is-4">
    <div className="overlay">
      <img src="/images/gallery/photo-2@2x.png" alt="" />
      <div className="has-text-black">The Perfect VenuE</div>
    </div>
  </Container>
);

export default GalleryImageItem;
