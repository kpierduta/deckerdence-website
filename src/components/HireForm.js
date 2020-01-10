import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .backgrounds {
    background-color: #811112;
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  .is-4 {
    margin-top: 2rem;
  }
`;

const HireForm = () => {
  return (
    <Wrapper>
      <section className="section ">
        <div className="container">
          <header className="Header has-text-centered">
            <p className="subtitle is-4">
              Hiring Deckerdence Bus Bar gives you a unique mobile bar for your
              event. When you book with us, before paying your deposit we will
              carry out a site visit. Depending on your event we may need access
              prior to the event day. With your booking you will have an event
              manager to work alongside you taking care of all the logistics.
              Our team can assist you with other items you may need for your
              event.{' '}
            </p>
          </header>
        </div>
      </section>
      <section className="section backgrounds">
        <div className="container">
          <div className="columns ">
            <div className="column is-5-desktop">
              <figure className="image is-3by2">
                <img
                  className="is-rounded"
                  src="/images/hire/icon@2x.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="column is-1 " />
            <div className="column is-vcentered is-desktop section">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Medium input"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Medium input"
                  />
                </div>
                <p className="subtitle is-4">
                  By submitting this form you agree to our contact conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HireForm;
