import React from 'react';

class Reset extends React.Component{
    render(){
        return(
            <button className="button--reset"> <i className="far fa-trash-alt"></i>
                <span className="button__text">Reset</span>
            </button>
        );
    }
}



export default Reset;