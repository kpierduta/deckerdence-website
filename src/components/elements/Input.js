import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .subtitle {
    color: ${props => props.theme.lightShades} !important;
  }
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

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', phone: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          email: '',
          phone: '',
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, phone } = this.state;
    return (
      <Section className="section">
        <form data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                name="email"
                className="input is-medium has-text-white"
                value={email}
                type="email"
                placeholder="Your email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                name="phone"
                className="input is-medium has-text-white"
                type="tel"
                value={phone}
                placeholder="Your phone number"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <p className="subtitle is-4 has-text-centered is-size-6-touch">
            By submitting this form you agree to our contact T & C
          </p>
          <div className="has-text-centered">
            <button type="submit" className="button is-danger">
              <span className="is-size-5-touch">DOWNLOAD</span>
            </button>
          </div>
        </form>
      </Section>
    );
  }
}

export default Input;
