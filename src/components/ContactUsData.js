import React from 'react';

import ContactUs from './ContactUs';

class ContactUsData extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <ContactUs
              icon="/images/contacts/icon@2x.png"
              title="Chat to us now"
              para="By using a our chat link you will come through directly to
              our team."
            />
            <ContactUs
              icon="/images/contacts/icon2.png"
              title="Chat to us now"
              para="By using a our chat link you will come through directly to
              our team."
            />
            <ContactUs
              icon="/images/contacts/icon3.png"
              title="Chat to us now"
              para="By using a our chat link you will come through directly to
              our team."
            />
          </div>
        </div>
      </section>
    );
  }
}
export default ContactUsData;
