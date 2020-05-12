import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const Section = styled.div`
  background-color: #e2e3e4;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  img {
    padding: 2rem;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
`;

const Wrapper = styled.div`
  :focus {
    outline: none !important;
  }
`;
const CalendarSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    speed: 400,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <Section className="section is-normal">
      <div className="columns is-centered">
        <div className="column is-10">
          <div>
            <h1 className="title is-4 has-text-centered">ARCHIVE</h1>
            <Slider {...settings}>
              {data.blogArticleSliderItems.map(options => (
                <Wrapper>
                  <img src={options.asset.url} alt="" />
                </Wrapper>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CalendarSlider;
