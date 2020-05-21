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
const data = [
  {
    options: '/images/archive/jan.jpg',
  },
  {
    options: '/images/archive/feb.jpg',
  },
  {
    options: '/images/archive/mar.jpg',
  },
  {
    options: '/images/archive/apr.jpg',
  },
  {
    options: '/images/archive/may.jpg',
  },
  {
    options: '/images/archive/june.jpg',
  },
  {
    options: '/images/archive/july.jpg',
  },
  {
    options: '/images/archive/aug.jpg',
  },
  {
    options: '/images/archive/sep.jpg',
  },
  {
    options: '/images/archive/oct.jpg',
  },
  {
    options: '/images/archive/novmber.jpg',
  },
  {
    options: '/images/archive/dec.jpg',
  },
];
const CalendarSlider = () => {
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
    slidesPerRow: 6,
  };
  return (
    <Section className="section is-normal">
      <div className="columns is-centered">
        <div className="column is-10">
          <div>
            <h1 className="title is-4 has-text-centered">ARCHIVE</h1>
            <Slider {...settings}>
              {data.map(item => (
                <Wrapper>
                  <img src={item.options} alt="" />
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
