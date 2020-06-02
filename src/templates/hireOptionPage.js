import React from 'react';

import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import TileItem from '../components/TileItem';
import BlogCategoryItem from '../components/BlogCategoryItem';
import VenueSection from '../components/VenueSection';
import Contact from '../components/Contact';
import FestivalIcon from '../components/FestivalIcon';

export const hireOptionPage = graphql`
  query hireOption($slug: String) {
    sanityVehicleHirePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      seoTitle
      seoKeywords
      seoMetaDescription
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
          _key
          sideImage
          category
        }
      }
      hireFormTitle
      firstFeature {
        asset {
          url
        }
      }
      festival {
        mainHeading
        subtitle
        item {
          _key
          title
          avatar {
            asset {
              url
            }
          }
        }
      }
      secondFeature {
        asset {
          url
        }
      }
      information {
        avatar {
          asset {
            url
          }
        }
        item {
          _key
          title
          subtitle
        }
      }
      thirdFeature {
        asset {
          url
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
                key={options._key}
                category={options.category}
                sideImage={options.sideImage}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-medium">
          <div className="columns is-centered is-desktop">
            <div className="column is-10">
              <header className="Header has-text-centered">
                <p className="subtitle is-5 para has-text-black">
                  {hire.hireFormTitle}
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <VenueSection frameBgImage={hire.firstFeature.asset.url} />

      <section className="section">
        <div className="container">
          <h1 className="title is-4 has-text-centered is-uppercase">
            {hire.festival.mainHeading}
          </h1>
          <div className="columns is-multiline is-variable is-5">
            {hire.festival.item.map(items => (
              <FestivalIcon
                key={items._key}
                image={items.avatar.asset.url}
                alternative="festivals"
              />
            ))}
          </div>
          <h1 className="title is-4 has-text-centered is-uppercase">
            {hire.festival.subtitle}
          </h1>
        </div>
      </section>
      <VenueSection frameBgImage={hire.secondFeature.asset.url} />
      <TileItem data={hire} />
      <VenueSection frameBgImage={hire.thirdFeature.asset.url} />
      <Contact />
    </Layout>
  );
};

export default HireOptionPage;
