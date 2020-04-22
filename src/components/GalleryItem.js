import React from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';

const Section = styled.div`
  img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.8s ease-in-out;
  }

  img:hover {
    filter: none;
    filter: grayscale(0);
  }
  .modal_small_image {
    width: 100% !important;
    height: 370px !important;
  }
`;

const GalleryItem = ({ src, alt }) => (
  <Section className="column is-4">
    <ModalImage
      large={src}
      alt={alt}
      small={src}
      className="modal_small_image"
      hideDownload
    />
  </Section>
);

export default GalleryItem;
