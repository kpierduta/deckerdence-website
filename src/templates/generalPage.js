import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptionHero from '../components/HireOptionHero';
import HireOptionTestimonial from '../components/HireOptionTestimonial';

export const generalPageQuery = graphql`
  query myGeneral($slug: String) {
    sanityGeneralPage(slug: { current: { eq: $slug } }) {
      seoTitle
      seoKeywords
      seoMetaDescription
      slug {
        current
      }
      mainHeading
      middleText
      subtitle
      frame {
        asset {
          url
        }
      }
      backgroundImage {
        asset {
          url
        }
      }
      information {
        alt
        columnReverse
        title
        subtitle
        description
        name
        date(formatString: "DD-MM-YYYY")
        asset {
          url
        }
      }
    }
  }
`;

const GeneralPage = ({ data }) => {
  const general = data.sanityGeneralPage;
  return (
    <Layout>
      <Seo
        title={general.seoTitle}
        description={general.seoKeywords}
        keywords={general.seoMetaDescription}
      />
      <HireOptionHero
        bgImage={general.backgroundImage.asset.url}
        frame={general.frame.asset.url}
        smallText={general.mainHeading}
        largeText={general.middleText}
        description={general.subtitle}
      />
      {general.information.map(options => (
        <HireOptionTestimonial
          flex={options.columnReverse}
          image={options.asset.url}
          title={options.title}
          position={options.subtitle}
          pera={options.description}
          name={options.name}
          date={options.date}
          alt={options.alt}
        />
      ))}
    </Layout>
  );
};

export default GeneralPage;
