import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsItem from '../components/ContactUsItem';
import MyMapComponent from '../components/GoogleMap';
import Contact from '../components/Contact';

export const contactUsQuery = graphql`
  query contactUsPage {
    sanitySiteSettings {
      contactUs {
        seoTitle
        seoKeywords
        seoMetaDescription
        mainHeading
        title
        subtitle
        contactItem {
          href
          _key
          title
          subtitle
          icon {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .column.is-6 {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  p {
    margin-top: 2rem;
  }
  .my {
    padding: 55px 0px 38px 0px;
  }
  img {
    height: 20rem;
  }
`;

const Header = styled.div`
  padding-bottom: 3rem;
`;

const ContactUs = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={settings.contactUs.seoTitle}
        keywords={settings.contactUs.seoKeywords}
        description={settings.contactUs.seoMetaDescription}
      />
      <PageHeading title={settings.contactUs.mainHeading} />
      <section className="section">
        <div className="container">
          <Header className="columns is-centered">
            <div className="column is-7">
              <h1 className="title is-4 is-spaced has-text-centered has-text-black">
                {settings.contactUs.title}
              </h1>
              <h1 className="subtitle is-5 has-text-centered has-text-black ">
                {settings.contactUs.subtitle}
              </h1>
            </div>
          </Header>
          <div className="columns">
            {settings.contactUs.contactItem.map(item => (
              <ContactUsItem
                key={item._key}
                title={item.title}
                icon={item.icon.asset.url}
                para={item.subtitle}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>
      <Section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-6">
              <div className="my">
                <MyMapComponent isMarkerShown />
              </div>
            </div>
            <div className="column is-6">
              <div className="my">
                <figure className="image">
                  <img
                    src="https://cdn.sanity.io/images/8zqv9o3f/production/d1539fbd26296d7f41613f909acc2cba6f43fdd9-1032x678.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <p className="subtitle is-5 has-text-white has-text-centered">
          Visitors by appointment only
        </p>
      </Section>
      <Contact avatar="/images/hire/icon@2x.png" />
    </Layout>
  );
};

export default ContactUs;
