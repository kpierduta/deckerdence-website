import React from 'react';

class Input extends React.Component {
  render() {
    const { type, text } = this.props;
    return (
      <div className="field">
        <div className="control">
          <input className="input is-medium" type={type} placeholder={text} />
        </div>
      </div>
    );
  }
}

export default Input;
