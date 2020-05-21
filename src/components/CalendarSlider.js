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
  {
    options: '/images/archive/jan18.jpg',
  },
  {
    options: '/images/archive/feb18.jpg',
  },
  {
    options: '/images/archive/mar18.jpg',
  },
  {
    options: '/images/archive/apr18.jpg',
  },
  {
    options: '/images/archive/may18.jpg',
  },
  {
    options: '/images/archive/june18.jpg',
  },
  {
    options: '/images/archive/july18.jpg',
  },
  {
    options: '/images/archive/aug18.jpg',
  },
  {
    options: '/images/archive/sep18.jpg',
  },
  {
    options: '/images/archive/oct18.jpg',
  },
  {
    options: '/images/archive/nov18.jpg',
  },
  {
    options: '/images/archive/dec18.jpg',
  },
  {
    options: '/images/archive/may17.jpg',
  },
  {
    options: '/images/archive/june17.jpg',
  },
  {
    options: '/images/archive/july17.jpg',
  },
  {
    options: '/images/archive/aug17.jpg',
  },
  {
    options: '/images/archive/sep17.jpg',
  },
  {
    options: '/images/archive/oct17.jpg',
  },
  {
    options: '/images/archive/nov17.jpg',
  },
  {
    options: '/images/archive/dec17.jpg',
  },
  {
    options: '/images/archive/jan16.jpg',
  },
  {
    options: '/images/archive/feb16.jpg',
  },
  {
    options: '/images/archive/mar16.jpg',
  },
  {
    options: '/images/archive/apr16.jpg',
  },
  {
    options: '/images/archive/may16.jpg',
  },
  {
    options: '/images/archive/june16.jpg',
  },
  {
    options: '/images/archive/july16.jpg',
  },
  {
    options: '/images/archive/aug16.jpg',
  },
  {
    options: '/images/archive/sep16.jpg',
  },
  {
    options: '/images/archive/oct16.jpg',
  },
  {
    options: '/images/archive/nov16.jpg',
  },
  {
    options: '/images/archive/dec16.jpg',
  },
  {
    options: '/images/archive/jan15.jpg',
  },
  {
    options: '/images/archive/feb15.jpg',
  },
  {
    options: '/images/archive/mar15.jpg',
  },
  {
    options: '/images/archive/apr15.jpg',
  },
  {
    options: '/images/archive/may15.jpg',
  },
  {
    options: '/images/archive/june15.jpg',
  },
  {
    options: '/images/archive/july15.jpg',
  },
  {
    options: '/images/archive/aug15.jpg',
  },
  {
    options: '/images/archive/sep15.jpg',
  },
  {
    options: '/images/archive/oct15.jpg',
  },
  {
    options: '/images/archive/nov15.jpg',
  },
  {
    options: '/images/archive/dec15.jpg',
  },
  {
    options: '/images/archive/jan14.jpg',
  },
  {
    options: '/images/archive/feb14.jpg',
  },
  {
    options: '/images/archive/mar14.jpg',
  },
  {
    options: '/images/archive/apr14.jpg',
  },
  {
    options: '/images/archive/may14.jpg',
  },
  {
    options: '/images/archive/june14.jpg',
  },
  {
    options: '/images/archive/july14.jpg',
  },
  {
    options: '/images/archive/aug14.jpg',
  },
  {
    options: '/images/archive/sep14.jpg',
  },
  {
    options: '/images/archive/oct14.jpg',
  },
  {
    options: '/images/archive/nov14.jpg',
  },
  {
    options: '/images/archive/dec14.jpg',
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
