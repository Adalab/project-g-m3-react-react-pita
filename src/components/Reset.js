import React from 'react';
import PropTypes from 'prop-types'; 

class Reset extends React.Component{
    render(){
        const {resetData} = this.props
        return(
            <button className="button--reset" onClick={resetData}> <i className="far fa-trash-alt"></i>
                <span className="button__text">Reset</span>
            </button>
        );
    }
}

Reset.propTypes = {
    resetData: PropTypes.func.isRequired
};

export default Reset;