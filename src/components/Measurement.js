import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    border: 2px solid #73ad21;
  }
`;

class Measurement extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Wrapper>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline  is-variable  is-3">
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-3 is-spaced">
                      Marquee information{' '}
                    </h1>
                    <h1 className="subtitle is-4">
                      The half wrap around marquee measures 25m x 9m and the
                      marquee structure is fitted directly from the bus, between
                      the 2 decks, to not spoil the upstairs views.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-3 is-spaced">
                      Marquee information{' '}
                    </h1>
                    <h1 className="subtitle is-4">
                      The half wrap around marquee measures 25m x 9m and the
                      marquee structure is fitted directly from the bus, between
                      the 2 decks, to not spoil the upstairs views.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-3 is-spaced">
                      Marquee information{' '}
                    </h1>
                    <h1 className="subtitle is-4">
                      The half wrap around marquee measures 25m x 9m and the
                      marquee structure is fitted directly from the bus, between
                      the 2 decks, to not spoil the upstairs views.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-3 is-spaced">
                      Marquee information{' '}
                    </h1>
                    <h1 className="subtitle is-4">
                      The half wrap around marquee measures 25m x 9m and the
                      marquee structure is fitted directly from the bus, between
                      the 2 decks, to not spoil the upstairs views.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default Measurement;
