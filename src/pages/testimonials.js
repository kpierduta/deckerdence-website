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
          date(formatString: "DD-MM-YYYY")
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
      <PartiesHero
        title={options.testimonialsPage.mainHeading}
        partyBgImage={options.testimonialsPage.backgroundImage.asset.url}
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
          name={item.name}
          date={item.date}
        />
      ))}
    </Layout>
  );
};

export default TestimonialPage;
