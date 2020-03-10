import React from 'react';

import styled from 'styled-components';
import Slider from 'react-slick';
import HireCard from './HireCard';

const Wrapper = styled.div`
  background-color: #fff;
`;

const Section = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/hire/net-bg.png');
  .container h1:last-child {
    padding: 0 0 4rem;
  }
  .slick-prev:before {
    width: 28px !important;
    height: 50px !important;
    background-size: cover !important;
    content: '' !important;
    position: absolute !important;
    top: -11px !important;
    left: -7px !important;
    background-image: url('/images/hire/slider-left-arrow.png');
  }
  opacity: 1 !important;
  .slick-next:before {
    width: 28px !important;
    height: 50px !important;
    background-size: cover;
    content: '' !important;
    position: absolute !important;
    top: -11px !important;
    left: 0px !important;
    background-image: url('/images/hire/slider-right-arrow.png');
  }
`;

const HireCardSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section className="section is-medium">
      <div className="container background">
        <div className="columns is-centered">
          <div className="column is-8">
            <Slider {...settings}>
              {data.sliderFeatures.sliderItem.map(items => (
                <Wrapper>
                  <HireCard
                    textBlack
                    title={items.title}
                    subtitle={items.description}
                    description={items.subtitle}
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

export default HireCardSlider;
