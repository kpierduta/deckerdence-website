import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #e2e3e4;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`;

export default class CalendarSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
    };
    return (
      <Section className="section is-normal">
        <div className="columns is-centered">
          <div className="column is-10">
            <div>
              <h1 className="title is-1 has-text-centered"> ARCHIVE </h1>
              <Slider {...settings}>
                <div>
                  <img src="/images/blog/1@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/1@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/1@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/1@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/3@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/3@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/3@2x.png" alt="" />
                </div>
                <div>
                  <img src="/images/blog/3@2x.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
