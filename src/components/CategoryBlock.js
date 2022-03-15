import React from 'react';
import styled from 'styled-components';

import CategoryItem from './CategoryItem';

const Section = styled.section`
  background-color: ${props => props.theme.lightAccent};
  .heading {
    margin: 3rem 0;
  }
`;

const CategoryBlock = ({ categoryBlock = [], title, subTitle }) => {
  return (
    <Section className="section">
      <div className="container">
        {title && (
          <p className="has-text-centered is-size-4 has-text-weight-bold is-uppercase mb-6">
            {title}
          </p>
        )}
        <div className="columns is-multiline">
          {categoryBlock.map(item => (
            <CategoryItem key={item._key} item={item} />
          ))}
        </div>
        {subTitle && (
          <p className="has-text-centered is-size-4 has-text-weight-bold is-uppercase">
            {subTitle}
          </p>
        )}
      </div>
    </Section>
  );
};

export default CategoryBlock;
