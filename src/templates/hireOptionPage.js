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
      information {
        item {
          title
          subtitle
        }
      }
    }
  }
`;

const HireOptionPage = ({ data }) => {
  const hire = data.sanityVehicleHirePage;
  return (
    <Layout>
      <Seo title="Deckerdence Hire Page" />
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

      <HireCardSlider />

      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-variable is-4">
            {hire.information.item.map(items => (
              <TileItem title={items.title} subtitle={items.subtitle} />
            ))}
          </div>
        </div>
      </section>
      <Diagram avatar="/images/hire/bus-diagram.png" />
      <VenueSection
        color
        frame="/images/parties/frame@2x.png"
        text="Cocktail Lounge Upstairs in Vintage bus bar "
        alt="main"
        frameBgImage="/images/hire/hire-bg-one.png"
      />
      <VenueSection
        flex
        frame="/images/parties/frame@2x.png"
        text="Plan every Detail with expert support"
        alt="main"
        frameBgImage="/images/hire/hire-bg-second.png"
      />
      <VenueSection
        color
        frame="/images/parties/rightframes.png"
        text="Create Your Theme Fully Customisable"
        frameBgImage="/images/parties/photo-black-and-white@2x.png"
      />
      <ContactForm />
    </Layout>
  );
};

export default HireOptionPage;
