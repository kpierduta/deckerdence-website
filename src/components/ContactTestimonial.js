import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import HireCard from './HireCard';

const Wrapper = styled.div``;

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
    background-image: url('./images/contacts/arrow-left@2x.png');
  }
    opacity: 1 !important;
  }
  .slick-next:before {
    width: 28px;
    height: 50px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    top: -11px;
    left: 0px;
    background-image: url('./images/contacts/arrow-right@2x.png');
  }
`;

class ContactTestimonial extends React.Component {
  render() {
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
            Testimonials
          </h1>
          <h1 className="subtitle has-text-centered has-text-white">
            Here are some testimonials from our clients that have used
            Deckerdence to stage their perfect event!
          </h1>
        </div>
        <div className="container background">
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <Wrapper>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Emily 00/00/00"
                  />
                </Wrapper>
                <Wrapper>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Jo & Eddy 00/00/01"
                  />
                </Wrapper>
                <Wrapper>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Emily 00/00/02"
                  />
                </Wrapper>
              </Slider>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ContactTestimonial;
