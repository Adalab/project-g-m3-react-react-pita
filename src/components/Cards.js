import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import CardForm from './CardForm';

// const linkAdalab = 'url(https://adalab.es/)';

const colorPallete1 = ['#104E43', '#438792', '#a2deaf'];
const colorPallete2 = ['#420101', '#bd1010', '#e95626'];
const colorPallete3 = ['#3e5b65', '#eab052', '#a0c0cf'];

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page__cards">
          <Header />
          <main className="card__main">
            <CardPreview />
            <CardForm color={colorPallete1} color2={colorPallete2} color3={colorPallete3} />
          </main>
          <footer className="page__footer"> <span className="footer__copyright">Awesome profile-cards @2019</span>
            <a className="footer__link"
              href="https://adalab.es/" target="blank">
              <img className="footer__logo" src="assets/images/logo-adalab-80px.png" alt="Logotipo de Adalab" />
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;