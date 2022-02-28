import React from 'react';
import { Link } from 'gatsby';

import GalleryItem from './GalleryItem';

const Gallery = ({ galleryBlock = [], linkTo }) => {
  return (
    <section className="section">
      <div className="container">
        {' '}
        <div className="columns is-multiline">
          {galleryBlock.map(item => {
            if (!item) return null;
            return <GalleryItem data={item} key={item._key} />;
          })}
        </div>
        {linkTo && (
          <div className="has-text-centered pt-4">
            <Link to={linkTo || '#'}>
              <img src="/images/view-more-black.png" alt="view-more-button" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
