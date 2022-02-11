import React from 'react';
import PropTypes from 'prop-types';

const JsonPreview = ({ document }) => {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginTop: 0 }}>
        JSON Data{' '}
        {document.displayed.title && `for ${document.displayed.title}`}
      </h1>
      <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
    </div>
  );
};
JsonPreview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  document: PropTypes.object.isRequired,
};

export default JsonPreview;
