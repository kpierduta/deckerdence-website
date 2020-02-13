import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Section = styled.div`
  background-color: #e2e3e4;
  .column {
    background-image: url('/images/hire/bgframe.png');
    background-size: cover;
    margin: 0 0.5rem;
    min-height: 9rem;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  h1 {
    padding-bottom: 2.5rem;
  }
`;

const BlogCategories = () => {
  return (
    <Section className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-1">Categories</h1>
        <div className="columns is-multiline">
          <div className="column has-text-centered">
            <Link
              to="/"
              className="title is-3 is-capatalized has-text-weight-normal has-text-black"
            >
              Deckerdence Events
            </Link>
          </div>
          <div className="column has-text-centered">
            <Link
              to="/"
              className="title is-3 is-capatalized has-text-weight-normal has-text-black"
            >
              The Deckerdence Journal
            </Link>
          </div>
          <div className="column has-text-centered">
            <Link
              to="/"
              className="title is-3 is-capatalized has-text-weight-normal has-text-black"
            >
              Wedding Advice & Tips
            </Link>
          </div>
          <div className="column has-text-centered">
            {' '}
            <Link
              to="/"
              className="title is-3 is-capatalized has-text-weight-normal has-text-black"
            >
              Wedding Fairs
            </Link>
          </div>
          <div className="column has-text-centered">
            {' '}
            <Link
              to="/"
              className="title is-3 is-capatalized has-text-weight-normal has-text-black"
            >
              Wedding venue
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogCategories;
