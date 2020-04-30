import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptionHero from '../components/HireOptionHero';
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
        middleText
        subtitle
        backgroundImage {
          asset {
            url
          }
        }
        information {
          asset {
            url
          }
          _key
          alt
          columnReverse
          title
          description
          name
          date
        }
      }
    }
  }
`;

const TestimonialPage = ({ data }) => {
  const options = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={options.testimonialsPage.seoTitle}
        description={options.testimonialsPage.seoKeywords}
        keywords={options.testimonialsPage.seoMetaDescription}
      />
      <HireOptionHero
        frame="/images/hire/optionFrame.png"
        bgImage={options.testimonialsPage.backgroundImage.asset.url}
        smallText={options.testimonialsPage.mainHeading}
        largeText={options.testimonialsPage.middleText}
        description={options.testimonialsPage.subtitle}
      />
      {options.testimonialsPage.information.map(item => (
        <HireOptionTestimonial
          key={item._key}
          image={item.asset.url}
          flex={item.columnReverse}
          title={item.title}
          position={item.subtitle}
          pera={item.description}
          alt={item.alt}
        />
      ))}
    </Layout>
  );
};

export default TestimonialPage;
