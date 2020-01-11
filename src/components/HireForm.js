import React from 'react';
import styled from 'styled-components';

import Input from './elments/Input';

const Wrapper = styled.div`
  .backgrounds {
    background-color: #811112;
  }
  .pera {
    margin-top: 2rem;
  }
  .text {
    color: ${props => props.theme.lightShades} !important;
  }
`;

class HireForm extends React.Component {
  render() {
    const { para, avatar, buttonName, subtitle } = this.props;
    return (
      <Wrapper>
        <section className="section">
          <div className="container">
            <header className="Header has-text-centered">
              <p className="subtitle is-4 para">{para}</p>
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
                <Input type="email" text="Email" />
                <Input type="email" text="Phone Number" />
                <p className="subtitle is-4 has-text-white text">{subtitle}</p>
                <button type="button" className="button is-light is-medium">
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default HireForm;
