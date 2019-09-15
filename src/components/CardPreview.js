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
            //   palette={this.props.palette}
              formObject={formObject}
            //   job={this.props.job}
            //   phone={this.props.phone}
            //   mail={this.props.mail}
            //   linkedin={this.props.linkedin}
            //   github={this.props.github}
            //   namePalette={this.props.namePalette}
               />
            </div>
          </section>
        )
    }
}

export default CardPreview;