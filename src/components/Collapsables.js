import React from 'react';
import PropTypes from 'prop-types';



class Collapsables extends React.Component {
  render () {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
  }
}

Collapsables.propTypes = {
	children: PropTypes.element.isRequired
}

export default Collapsables;