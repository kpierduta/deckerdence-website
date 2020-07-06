import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e2e3e4;
  h1 {
    padding-bottom: 2rem;
  }
  .column {
    background-image: url('/images/hire/bgframe.png');
    background-size: cover;
    margin: 0 0.5rem;
    min-height: 8rem;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Categories = [
  'LATEST JOURNAL',
  'THE DECKERDENCE JOURNAL',
  'ALL THINGS WEDDINGS',
  'EVENT PLANNING',
  'SUPPALIER JOURNAL',
  'ALL CATEGORIES',
];

const BlogCategory = ({ categoryChange }) => {
  return (
    <Wrapper className="section">
      <div className="container">
        <h1 className="title is-4 has-text-centered">Catagories</h1>
        <div className="columns is-multiline">
          {Categories.map(value => (
            <div className="column">
              <div
                className="title is-5 has-text-weight-normal has-text-black"
                onClick={() => categoryChange(value)}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCategory;
