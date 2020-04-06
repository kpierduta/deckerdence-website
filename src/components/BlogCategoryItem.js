import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Column = styled.div`
  background-image: url('/images/hire/bgframe.png');
  background-size: cover;
  margin: 0 0.5rem;
  min-height: 8rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const SideImage = styled.div`
  img {
    height: 7rem;
  }
`;

const BlogCategoryItem = ({ category, sideImage }) => {
  return (
    <div className="column has-text-centered">
      <div className="columns">
        <Column className="column">
          <div className="title is-5 is-capatalized has-text-weight-normal has-text-black">
            {category}
          </div>
        </Column>
        {sideImage && (
          <SideImage className="column is-2 is-hidden-mobile">
            <img src="/images/hire/arrow-vertical.png" alt="vertical-arrow" />
          </SideImage>
        )}
      </div>
    </div>
  );
};

BlogCategoryItem.defaultProps = {
  sideImage: false,
};

BlogCategoryItem.propTypes = {
  sideImage: PropTypes.bool,
};

export default BlogCategoryItem;
