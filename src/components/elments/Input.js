import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .input {
    margin-top: 0.7rem;
  }
`;

class Input extends React.Component {
  render() {
    const { type, text } = this.props;
    return (
      <Section className="field">
        <div className="control">
          <input className="input is-medium" type={type} placeholder={text} />
        </div>
      </Section>
    );
  }
}

export default Input;
