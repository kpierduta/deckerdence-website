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
  .input {
    margin-top: 1rem;
  }
`;

class HireForm extends React.Component {
  render() {
    const { para, avatar, email, phone, buttonName, subtitle } = this.props;
    return (
      <Wrapper>
        <section className="section">
          <div className="container">
            <header className="Header has-text-centered">
              <p className="subtitle is-4">{para}</p>
            </header>
          </div>
        </section>
        <section className="section backgrounds">
          <div className="container">
            <div className="columns ">
              <div className="column is-5-desktop">
                <figure className="image is-3by2">
                  <img className="is-rounded" src={avatar} alt="" />
                </figure>
              </div>
              <div className="column is-vcentered is-desktop section">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder={email}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder={phone}
                    />
                  </div>
                  <p className="subtitle is-4 has-text-white">{subtitle}</p>
                  <button type="button" className="button is-light is-medium">
                    {buttonName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default HireForm;
