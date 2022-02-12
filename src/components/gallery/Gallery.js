import React from 'react';

import GalleryItem from './GalleryItem';

const Gallery = ({ galleryBlock = [] }) => {
  return (
    <section className="section">
      <div className="container">
        {' '}
        <div className="columns">
          {galleryBlock.map(item => {
            if (!item) return null;
            return <GalleryItem data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
