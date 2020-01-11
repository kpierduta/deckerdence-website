import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

class Diagram extends React.Component {
  render() {
    const { avatar } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-7">
              <figure className="image is-3by2">
                <img src={avatar} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Diagram;
