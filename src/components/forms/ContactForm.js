import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .subtitle {
    color: ${props => props.theme.lightShades} !important;
  }
  .input {
    border-radius: 0;
    border: 1px solid ${props => props.theme.borderColor};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    outline: ${props =>
      props.dottedBorder ? 'null' : '1px dotted rgba(255, 255, 255, 0.4)'};
    outline-offset: ${props => (props.dottedBorder ? 'null' : '5px')};
    ::placeholder {
      color: ${props => props.theme.lightShades} !important ;
    }
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
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
    const { pera, dottedBorder } = this.props;
    return (
      <Section className="section is-paddingless" dottedBorder={dottedBorder}>
        <form data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                name="email"
                className="input is-medium is-family-secondary subtitle is-5 is-uppercase"
                value={email}
                type="email"
                placeholder="EMAIL"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                name="phone"
                className="input is-medium is-family-secondary subtitle is-5 is-uppercase"
                type="tel"
                value={phone}
                placeholder="Phone Number "
                onChange={this.handleChange}
              />
            </div>
          </div>
          <p className="subtitle is-5 has-text-centered-touch">{pera}</p>
          <div>
            <button type="submit" className="button is-danger title is-5 ">
              <span className="is-size-5-touch is-uppercase">Download</span>
            </button>
          </div>
        </form>
      </Section>
    );
  }
}

export default ContactForm;
