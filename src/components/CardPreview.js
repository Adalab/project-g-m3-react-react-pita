import React  from 'react';
import Reset from './Reset';
import Card from './Card';

class CardPreview extends React.Component {
    render() {
		const {defaultInput, formObject} = this.props
        return(
            <section className="card-preview">
            <div className="card-preview__container">
              <Reset />
              <Card 
                defaultInput = {defaultInput}
                formObject={formObject}
               />
            </div>
          </section>
        )
    }
}

export default CardPreview;