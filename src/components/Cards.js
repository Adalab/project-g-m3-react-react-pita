import React from 'react';
import Header from './Header';
import CardForm from './CardForm';

// const linkAdalab = 'url(https://adalab.es/)';

const colorPallete1=['#104E43','#438792','#a2deaf'];
const colorPallete2=['#420101','#bd1010','#e95626'];
const colorPallete3 =['#3e5b65','#eab052','#a0c0cf'];

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page__cards">
         <Header />
          <main className="card__main">
            <section className="card-preview">
              <div className="card-preview__container">
                <button className="button--reset"> <i className="far fa-trash-alt"></i>
                  <span className="button__text">Reset</span>
                </button>
                <div className="preview-card js__preview-card">
                  <div className="preview-card__title-container">
                    <h4 className="preview-card__name">Nombre Apellido</h4>
                    <h5 className="preview-card__career">Front-end developer</h5>
                  </div>
                  <div className="preview-card__img js__profile-image"></div>
                  <ul className="preview-card__social-list">
                    <li className="social-list__item hidden"> <a href="#phone" target="_blank" className="social-list__link phone__link">
                      <i className="fas fa-mobile-alt social-list__icon"></i>
                    </a>
                    </li>
                    <li className="social-list__item hidden"> <a href="#email" target="_blank" className="social-list__link email__link">
                      <i className="far fa-envelope social-list__icon"></i>
                    </a>
                    </li>
                    <li className="social-list__item hidden"> <a href="#linkedin" target="_blank" className="social-list__link linkedin__link">
                      <i className="fab fa-linkedin-in social-list__icon"></i>
                    </a>
                    </li>
                    <li className="social-list__item hidden"> <a href="#github" target="_blank" className="social-list__link github__link">
                      <i className="fab fa-github-alt social-list__icon"></i>
                    </a>

                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <CardForm color={colorPallete1} color2={colorPallete2} color3={colorPallete3}/>
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