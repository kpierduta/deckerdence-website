import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import HireCard from './HireCard';

const Section = styled.div`
  background-image: url(/images/hire/decar.png);
  background-size: cover;
  background-repeat: no-repeat;
`;

class HireCardSlider extends React.Component {
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
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <div>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Emily 00/00/00"
                  />
                </div>
                <div>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Emily 00/00/01"
                  />
                </div>
                <div>
                  <HireCard
                    title="Clare, I just wanted to thank all o"
                    subtitle="“Clare, I just wanted to thank all of the Deckerdence team for
                    providing such a fantastic venue for Emily’s 21st party. Our
                    Deckerdence experience last year for our 25th Wedding Anniversary
                    was amazing but the new team led by yourself and Mark, excelled even
                    that.”"
                    description="Emily 00/00/02"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireCardSlider;
