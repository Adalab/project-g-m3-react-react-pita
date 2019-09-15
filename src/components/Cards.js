import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import CardForm from './CardForm';
import Footer from './Footer';

const linkAdalab = 'https://adalab.es/';

const colorPallete1 = ['#104E43', '#438792', '#a2deaf'];
const colorPallete2 = ['#420101', '#bd1010', '#e95626'];
const colorPallete3 = ['#3e5b65', '#eab052', '#a0c0cf'];

class Cards extends React.Component {
  render() {
	  const {defaultInput, formObject, onChangeListener, onClickPalette} = this.props
    return (
      <React.Fragment>
        <div className="page__cards">
          <Header />
          <main className="card__main">
            <CardPreview
              defaultInput = {defaultInput}
              formObject={formObject}
               />
            <CardForm 
              color={colorPallete1} color2={colorPallete2} color3={colorPallete3} 
              onChangeListener={onChangeListener}
              onClickPalette={onClickPalette}
              formObject={formObject}
            />
          </main>
          <Footer linkAdalab={linkAdalab}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;