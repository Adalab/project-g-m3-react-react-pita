import React  from 'react';
import Reset from './Reset';
import Card from './Card';
import PropTypes from 'prop-types'; 

class CardPreview extends React.Component {
    render() {
		const {defaultInput, formObject, resetData} = this.props
        return(
            <section className="card-preview">
            <div className="card-preview__container">
              <Reset resetData={resetData}/>
              <Card 
                defaultInput = {defaultInput}
                formObject={formObject}
               />
            </div>
          </section>
        )
    }
}

CardPreview.propTypes = {
  defaultInput: PropTypes.object.isRequired,
  formObject: PropTypes.object.isRequired,
  resetData: PropTypes.func.isRequired
}; 

export default CardPreview;