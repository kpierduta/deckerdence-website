import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import HireForm from '../components/HireForm';
import TileItem from '../components/TileItem';
import BlogCategoryItem from '../components/BlogCategoryItem';
import HireCardSlider from '../components/HireCardSlider';
import Diagram from '../components/Diagram';
import VenueSection from '../components/VenueSection';
import ContactForm from '../components/ContactForm';

export const hireOptionPage = graphql`
  query hireOption($slug: String) {
    sanityVehicleHirePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      hireHeroBackgroundImage {
        asset {
          url
        }
      }
      seoTitle
      seoKeywords
      seoMetaDescription
      hireHeroOption
      hireHeroTitle
      hireHeroSubtitle
      vehicleFeatures {
        options {
          sideImage
          category
        }
      }
      hireFormTitle
      sliderFeatures {
        sliderItem {
          hasTextBlack
          title
          description
          subtitle
        }
      }
      information {
        item {
          title
          subtitle
        }
      }
      hireOptionDiagram {
        asset {
          url
        }
      }
      vehicleFeature {
        items {
          hasFrameRight
          hasTextWhite
          title
          bgImageAlt
          featuresBackgroundImage {
            asset {
              url
            }
          }
          bgImageAlt
          featuresFrameImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const HireOptionPage = ({ data }) => {
  const hire = data.sanityVehicleHirePage;
  return (
    <Layout>
      <Seo
        title={hire.seoTitle}
        description={hire.seoMetaDescription}
        keywords={hire.seoKeywords}
      />
      <HireHero
        Option={hire.hireHeroOption}
        title={hire.hireHeroTitle}
        subtitle={hire.hireHeroSubtitle}
        bgImage={hire.hireHeroBackgroundImage.asset.url}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {hire.vehicleFeatures.options.map(options => (
              <BlogCategoryItem
                category={options.category}
                sideImage={options.sideImage}
              />
            ))}
          </div>
        </div>
      </section>
      <HireForm
        para={hire.hireFormTitle}
        avatar="/images/hire/icon@2x.png"
        email="Email"
        phone="Phone Number"
        buttonName="DOWNLOAD"
        subtitle="By submitting this form you agree to our contact conditions."
        mainSubtitle="mainSubtitle"
      />
      <HireCardSlider data={hire} />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-variable is-4">
            {hire.information.item.map(items => (
              <TileItem title={items.title} subtitle={items.subtitle} />
            ))}
          </div>
        </div>
      </section>
      <Diagram avatar={hire.hireOptionDiagram.asset.url} />
      {hire.vehicleFeature.items.map(item => (
        <VenueSection
          flex={item.hasFrameRight}
          color={item.hasTextWhite}
          text={item.title}
          frameBgImage={item.featuresBackgroundImage.asset.url}
          alt={item.bgImageAlt}
          frame={item.featuresFrameImage.asset.url}
        />
      ))}
      <ContactForm />
    </Layout>
  );
};

export default HireOptionPage;
