import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p style={{margin: 0}}>We introduce you:</p>
        <h1> {this.props.name}</h1>
        <p style={{fontSize: 16}}>More info on how to donate soon..</p>
      </div>
        )
        ;
  }
}

export default Welcome;