import React from 'react';
import styled from 'styled-components';

import CategoryItem from './CategoryItem';

const Section = styled.section`
  background-color: ${props => props.theme.lightAccent};
  .heading {
    margin: 3rem 0;
  }
`;

const CategoryBlock = ({ categoryBlock = [] }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {categoryBlock.map(item => (
            <CategoryItem key={item._key} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CategoryBlock;
