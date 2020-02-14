import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Column = styled.div`
  background-image: url('/images/hire/bgframe.png');
  background-size: cover;
  margin: 0 0.5rem;
  min-height: 9rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const BlogCategoryItem = ({ category }) => {
  return (
    <Column className="column has-text-centered">
      <Link
        to="/"
        className="title is-3 is-capatalized has-text-weight-normal has-text-black"
      >
        {category}
      </Link>
    </Column>
  );
};

export default BlogCategoryItem;
