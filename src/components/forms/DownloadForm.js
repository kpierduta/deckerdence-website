import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .subtitle {
    color: ${props => props.theme.darkShades} !important;
  }
  h1 {
    line-height: 20px !important;
    height: 30px;
  }
  .input {
    border-radius: 0;
    border: 1px solid ${props => props.theme.darkShades};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    outline: ${props => (props.dottedBorder ? 'null' : '1px dotted #2c2c2a')};
    outline-offset: ${props => (props.dottedBorder ? 'null' : '5px')};
    ::placeholder {
      color: ${props => props.theme.darkShades} !important ;
    }
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class DownloadForm extends React.Component {
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
    const { pera, dottedBorder, title } = this.props;
    return (
      <Section className="section is-paddingless" dottedBorder={dottedBorder}>
        <form data-netlify="true" name="contact" onSubmit={this.handleSubmit}>
          <h1 className="title is-5 has-text-centered-touch">{title}</h1>
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
          <p className="subtitle is-6 has-text-centered-touch">{pera}</p>
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

export default DownloadForm;
