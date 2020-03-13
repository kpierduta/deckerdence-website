import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import HireCard from './HireCard';

const Section = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/contacts/background.png');
  .container h1:last-child {
    padding: 0 0 4rem;
  }
  .background {
    background-image: url('/images/contacts/slider-bg.png');
    background-size: 65% 99%;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 768px) {
      background-size: 100% 100%;
    }
  }
  .slick-prev:before {
    width: 28px;
    height: 50px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    top: -11px;
    left: -7px;
    background-image: url('/images/contacts/arrow-left@2x.png');
  }
  opacity: 1 !important;

  .slick-next:before {
    width: 28px;
    height: 50px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    top: -11px;
    left: 0px;
    background-image: url('/images/contacts/arrow-right@2x.png');
  }
`;

const Wrapper = styled.div`
  :focus {
    outline: none !important;
  }
`;

const ContactTestimonial = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section className="section is-medium">
      <div className="container">
        <h1 className="title is-3 is-spaced  has-text-centered has-text-white has-text-weight-normal">
          {data.contactUsSlider.mainHeading}
        </h1>
        <h1 className="subtitle has-text-centered has-text-white">
          {data.contactUsSlider.subtitle}
        </h1>
      </div>
      <div className="container background">
        <div className="columns is-centered">
          <div className="column is-8">
            <Slider {...settings}>
              {data.contactUsSlider.sliderItem.map(items => (
                <Wrapper>
                  <HireCard
                    color={items.hasTextBlack}
                    title={items.title}
                    subtitle={items.description}
                    description={items.name}
                    date={items.sliderDate}
                  />
                </Wrapper>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactTestimonial;
