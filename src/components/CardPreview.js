import React  from 'react';
import Reset from './Reset';
import Card from './Card';
import PropTypes from 'prop-types'; 

class CardPreview extends React.Component {
    render() {
		const {defaultInput, formObject, avatar} = this.props
        return(
            <section className="card-preview">
            <div className="card-preview__container">
              <Reset />
              <Card 
                defaultInput = {defaultInput}
                formObject={formObject}
                avatar={avatar} 
               />
            </div>
          </section>
        )
    }
}

CardPreview.propTypes = {
  defaultInput: PropTypes.object,
  formObject: PropTypes.object
}; 

export default CardPreview;