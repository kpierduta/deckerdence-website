import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .input {
    border: 1px solid ${props => props.theme.borderColor};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;

    ::placeholder {
      color: ${props => props.theme.borderColor} !important ;
    }
  }
`;

const Input = ({ type, text }) => (
  <Section className="field">
    <div className="control">
      <input
        className="input is-medium has-text-white "
        type={type}
        placeholder={text}
      />
    </div>
  </Section>
);

export default Input;
