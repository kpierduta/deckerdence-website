import React from 'react';

import GalleryItem from './GalleryItem';

const Gallery = ({ galleryBlock = [] }) => {
  return (
    <section className="section">
      <div className="container">
        {galleryBlock.map(item => {
          return (
            <div className="columns">
              <GalleryItem data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
