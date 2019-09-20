import React from 'react';
import PropTypes from 'prop-types';

class Collapsables extends React.Component {
  render () {
    const {children} = this.props
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      );
  }
}

Collapsables.propTypes = {
	children: PropTypes.element.isRequired
}

export default Collapsables;