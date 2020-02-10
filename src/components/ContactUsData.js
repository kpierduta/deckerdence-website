import React from 'react';

import ContactUsItem from './ContactUsItem';

const ContactUsData = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <ContactUsItem
          icon="/images/contacts/icon@2x.png"
          title="Chat to us now"
          para="By using a our chat link you will come through directly to
              our team."
        />
        <ContactUsItem
          icon="/images/contacts/icon2.png"
          title="Chat to us now"
          para="By using a our chat link you will come through directly to
              our team."
        />
        <ContactUsItem
          icon="/images/contacts/icon3.png"
          title="Chat to us now"
          para="By using a our chat link you will come through directly to
              our team."
        />
      </div>
    </div>
  </section>
);
export default ContactUsData;
