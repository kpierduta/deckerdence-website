import React from 'react';
import PropTypes from 'prop-types';

const WebPreview = ({ document }) => {
  const url = 'https://www.spasandhottubs.co.uk/';
  const { displayed } = document;

  if (
    typeof displayed.slug === 'undefined' ||
    displayed._type === 'category' ||
    displayed._type === 'author' ||
    displayed._type === 'globals' ||
    displayed._type === 'navigation'
  ) {
    return <section style={{ padding: '24px' }}>No preview available</section>;
  }

  let slug = null;
  if (displayed.slug.current === 'homepage') {
    slug = '';
  } else if (displayed._type === 'articles') {
    slug = `news/${displayed.slug.current}`;
  }

  return (
    <iframe
      title="preview"
      src={url + slug}
      frameBorder={0}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default WebPreview;

WebPreview.propTypes = {
  document: PropTypes.object.isRequired,
};
