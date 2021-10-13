import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import HireOptionTestimonial from '../components/HireOptionTestimonial';

export const testimonialPageQuery = graphql`
  query myTestimonial {
    sanitySiteSettings {
      testimonialsPage {
        seoTitle
        seoKeywords
        seoMetaDescription
        slug {
          current
        }
        mainHeading
        backgroundImage {
          asset {
            url
          }
        }
      }
    }
    allSanityTestimonial(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _id
          order
          columnReverse
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          description
          name
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`;

const TestimonialPage = ({ data }) => {
  const options = data.sanitySiteSettings;
  const myTestimonial = data.allSanityTestimonial.edges;
  return (
    <Layout>
      <Seo
        title={options.testimonialsPage.seoTitle}
        description={options.testimonialsPage.seoKeywords}
        keywords={options.testimonialsPage.seoMetaDescription}
      />
      <PartiesHero
        title={options.testimonialsPage.mainHeading}
        partyBgImage={options.testimonialsPage.backgroundImage.asset.url}
      />
      {myTestimonial.map(item => (
        <HireOptionTestimonial
          key={item.node._id}
          image={item.node.image.asset.fluid}
          flex={item.node.columnReverse}
          title={item.node.title}
          pera={item.node.description}
          alt="HireOptionTestimonial"
          name={item.node.name}
          date={item.node.date}
        />
      ))}
    </Layout>
  );
};

export default TestimonialPage;
