import React from 'react';
import Slider from 'react-slick';

import HireCard from './HireCard';

class HireCardSlider extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <div>
                  <HireCard title="" para="" subtitle="" />
                </div>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HireCardSlider;
