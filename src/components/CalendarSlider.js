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
  cursor: pointer;
  :focus {
    outline: none !important;
  }
`;
const data = [
  {
    options: '/images/archive/jan20.jpg',
    value: '01-2020',
  },
  {
    options: '/images/archive/feb20.jpg',
    value: '02-2020',
  },
  {
    options: '/images/archive/mar20.jpg',
    value: '03-2020',
  },
  {
    options: '/images/archive/apr20.jpg',
    value: '04-2020',
  },
  {
    options: '/images/archive/may20.jpg',
    value: '05-2020',
  },
  {
    options: '/images/archive/june20.jpg',
    value: '06-2020',
  },
  {
    options: '/images/archive/july20.jpg',
    value: '07-2020',
  },
  {
    options: '/images/archive/aug20.jpg',
    value: '08-2020',
  },
  {
    options: '/images/archive/sep20.jpg',
    value: '09-2020',
  },
  {
    options: '/images/archive/oct20.jpg',
    value: '10-2020',
  },
  {
    options: '/images/archive/nov20.jpg',
    value: '11-2020',
  },
  {
    options: '/images/archive/dec20.jpg',
    value: '12-2020',
  },
  {
    options: '/images/archive/jan.jpg',
    value: '01-2019',
  },
  {
    options: '/images/archive/feb.jpg',
    value: '02-2019',
  },
  {
    options: '/images/archive/mar.jpg',
    value: '03-2019',
  },
  {
    options: '/images/archive/apr.jpg',
    value: '04-2019',
  },
  {
    options: '/images/archive/may.jpg',
    value: '05-2019',
  },
  {
    options: '/images/archive/june.jpg',
    value: '06-2019',
  },
  {
    options: '/images/archive/july.jpg',
    value: '07-2019',
  },
  {
    options: '/images/archive/aug.jpg',
    value: '08-2019',
  },
  {
    options: '/images/archive/sep.jpg',
    value: '09-2019',
  },
  {
    options: '/images/archive/oct.jpg',
    value: '10-2019',
  },
  {
    options: '/images/archive/novmber.jpg',
    value: '11-2019',
  },
  {
    options: '/images/archive/dec.jpg',
    value: '12-2019',
  },
  {
    options: '/images/archive/jan18.jpg',
    value: '01-2018',
  },
  {
    options: '/images/archive/feb18.jpg',
    value: '02-2018',
  },
  {
    options: '/images/archive/mar18.jpg',
    value: '03-2018',
  },
  {
    options: '/images/archive/apr18.jpg',
    value: '04-2018',
  },
  {
    options: '/images/archive/may18.jpg',
    value: '05-2018',
  },
  {
    options: '/images/archive/june18.jpg',
    value: '06-2018',
  },
  {
    options: '/images/archive/july18.jpg',
    value: '07-2018',
  },
  {
    options: '/images/archive/aug18.jpg',
    value: '08-2018',
  },
  {
    options: '/images/archive/sep18.jpg',
    value: '09-2018',
  },
  {
    options: '/images/archive/oct18.jpg',
    value: '10-2018',
  },
  {
    options: '/images/archive/nov18.jpg',
    value: '11-2018',
  },
  {
    options: '/images/archive/dec18.jpg',
    value: '12-2018',
  },
  {
    options: '/images/archive/may17.jpg',
    value: '05-2017',
  },
  {
    options: '/images/archive/june17.jpg',
    value: '06-2017',
  },
  {
    options: '/images/archive/july17.jpg',
    value: '07-2017',
  },
  {
    options: '/images/archive/aug17.jpg',
    value: '08-2017',
  },
  {
    options: '/images/archive/sep17.jpg',
    value: '09-2017',
  },
  {
    options: '/images/archive/oct17.jpg',
    value: '10-2017',
  },
  {
    options: '/images/archive/nov17.jpg',
    value: '11-2017',
  },
  {
    options: '/images/archive/dec17.jpg',
    value: '12-2017',
  },
  {
    options: '/images/archive/jan16.jpg',
    value: '01-2016',
  },
  {
    options: '/images/archive/feb16.jpg',
    value: '02-2016',
  },
  {
    options: '/images/archive/mar16.jpg',
    value: '03-2016',
  },
  {
    options: '/images/archive/apr16.jpg',
    value: '04-2016',
  },
  {
    options: '/images/archive/may16.jpg',
    value: '05-2016',
  },
  {
    options: '/images/archive/june16.jpg',
    value: '06-2016',
  },
  {
    options: '/images/archive/july16.jpg',
    value: '07-2016',
  },
  {
    options: '/images/archive/aug16.jpg',
    value: '08-2016',
  },
  {
    options: '/images/archive/sep16.jpg',
    value: '09-2016',
  },
  {
    options: '/images/archive/oct16.jpg',
    value: '10-2016',
  },
  {
    options: '/images/archive/nov16.jpg',
    value: '11-2016',
  },
  {
    options: '/images/archive/dec16.jpg',
    value: '12-2016',
  },
  {
    options: '/images/archive/jan15.jpg',
    value: '01-2015',
  },
  {
    options: '/images/archive/feb15.jpg',
    value: '02-2015',
  },
  {
    options: '/images/archive/mar15.jpg',
    value: '03-2015',
  },
  {
    options: '/images/archive/apr15.jpg',
    value: '04-2015',
  },
  {
    options: '/images/archive/may15.jpg',
    value: '05-2015',
  },
  {
    options: '/images/archive/june15.jpg',
    value: '06-2015',
  },
  {
    options: '/images/archive/july15.jpg',
    value: '07-2015',
  },
  {
    options: '/images/archive/aug15.jpg',
    value: '08-2015',
  },
  {
    options: '/images/archive/sep15.jpg',
    value: '09-2015',
  },
  {
    options: '/images/archive/oct15.jpg',
    value: '10-2015',
  },
  {
    options: '/images/archive/nov15.jpg',
    value: '11-2015',
  },
  {
    options: '/images/archive/dec15.jpg',
    value: '12-2015',
  },
  {
    options: '/images/archive/jan14.jpg',
    value: '01-2014',
  },
  {
    options: '/images/archive/feb14.jpg',
    value: '02-2014',
  },
  {
    options: '/images/archive/mar14.jpg',
    value: '03-2014',
  },
  {
    options: '/images/archive/apr14.jpg',
    value: '04-2014',
  },
  {
    options: '/images/archive/may14.jpg',
    value: '05-2014',
  },
  {
    options: '/images/archive/june14.jpg',
    value: '06-2014',
  },
  {
    options: '/images/archive/july14.jpg',
    value: '07-2014',
  },
  {
    options: '/images/archive/aug14.jpg',
    value: '08-2014',
  },
  {
    options: '/images/archive/sep14.jpg',
    value: '09-2014',
  },
  {
    options: '/images/archive/oct14.jpg',
    value: '10-2014',
  },
  {
    options: '/images/archive/nov14.jpg',
    value: '11-2014',
  },
  {
    options: '/images/archive/dec14.jpg',
    value: '12-2014',
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
                <Wrapper key={item.options}>
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
