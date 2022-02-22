import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ContentBlocks from '../sanity/ContentBlocks';

const Pages = ({ data }) => {
  const { page } = data;
  if (!page) return null;

  return (
    <Layout>
      <Seo
        title={page.title}
        description={page.seoDescription}
        keywords={page.seoKeywords}
        image={page.seoFeaturedImage.asset.url}
      />

      {page.contentBlocks &&
        page.contentBlocks.map((block, idx) =>
          React.createElement(ContentBlocks(block._type), {
            idx,
            key: block._key,
            ...block,
          }),
        )}
    </Layout>
  );
};

Pages.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pages;

export const pageQuery = graphql`
  query($slug: String!) {
    page: sanityPages(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      seoFeaturedImage {
        asset {
          id
          url
          gatsbyImageData
        }
      }
      seoDescription
      seoKeywords
      contentBlocks: _rawContentBlocks(resolveReferences: { maxDepth: 10 })
    }
  }
`;
