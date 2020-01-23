import React from 'react';

import DetailsCard from './DetailsCard';

class DetailsCardSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <DetailsCard
              para="By using a our chat link you will come through directly to
              our team."
            />
            <DetailsCard
              para="By using a our chat link you will come through directly to
              our team."
            />
          </div>
        </div>
      </section>
    );
  }
}
export default DetailsCardSection;
