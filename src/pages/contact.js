import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsItem from '../components/ContactUsItem';
import MyMapComponent from '../components/GoogleMap';
import ContactTestimonial from '../components/ContactTestimonial';

export const contactUsQuery = graphql`
  query contactUsPage {
    sanitySiteSettings {
      contactUsSeoTitle
      contactUsSeoKeywords
      contactUsSeoMetaDescription
      contactUsMainHeading
      contactUsTitle
      contactUsSubtitle
      firstContactUsItemTitle
      firstContactUsItemIcon {
        asset {
          url
        }
      }
      firstContactUsItemSubtitle
      secondContactUsItemTitle
      secondContactUsItemIcon {
        asset {
          url
        }
      }
      secondContactUsItemSubtitle
      thirdContactUsItemTitle
      thirdContactUsItemIcon {
        asset {
          url
        }
      }
      thirdContactUsItemSubtitle
      thirdContactUsItemSubtitle
      contactUsSlider {
        mainHeading
        subtitle
        sliderItem {
          hasTextBlack
          title
          name
          sliderDate(formatString: "DD-MM-YYYY")
          description
        }
      }
    }
  }
`;

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .columns {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .is-10 {
    padding: 6.5rem 0rem;
  }
  p {
    margin-top: 2rem;
  }
`;

const Header = styled.div`
  padding-bottom: 3rem;
`;

const Contact = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={settings.contactUsSeoTitle}
        description={settings.contactUsSeoMetaDescription}
        keywords={settings.contactUsSeoKeywords}
      />
      <PageHeading title={settings.contactUsMainHeading} />
      <section className="section">
        <div className="container">
          <Header className="columns is-centered">
            <div className="column is-7">
              <h1 className="title is-4 is-spaced has-text-centered has-text-black">
                {settings.contactUsTitle}
              </h1>
              <h1 className="subtitle is-5 has-text-centered has-text-black ">
                {settings.contactUsSubtitle}
              </h1>
            </div>
          </Header>
          <div className="columns">
            <ContactUsItem
              title={settings.firstContactUsItemTitle}
              icon={settings.firstContactUsItemIcon.asset.url}
              para={settings.firstContactUsItemSubtitle}
            />
            <ContactUsItem
              title={settings.secondContactUsItemTitle}
              icon={settings.secondContactUsItemIcon.asset.url}
              para={settings.secondContactUsItemSubtitle}
              href={`tel:${settings.secondContactUsItemSubtitle}`}
            />
            <ContactUsItem
              title={settings.thirdContactUsItemTitle}
              icon={settings.thirdContactUsItemIcon.asset.url}
              para={settings.thirdContactUsItemSubtitle}
              href={`mailto:${settings.thirdContactUsItemSubtitle}`}
            />
          </div>
        </div>
      </section>
      <Section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <MyMapComponent isMarkerShown />
            </div>
          </div>
        </div>
        <p className="subtitle is-5 has-text-white has-text-centered">
          Visitors by appointment only
        </p>
      </Section>
      <ContactTestimonial data={settings} />
    </Layout>
  );
};

export default Contact;
