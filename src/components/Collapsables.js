import React from 'react';



class Collapsables extends React.Component {
  render () {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
  }
}

export default Collapsables;