import React from 'react';

class Submit extends React.Component {
    render() {
        return (
            <div className="collapsable">
                <div className="collapsable__header"> <i className="fas fa-share-alt txt__color--orange"></i>
                    <h2 className="collapsable__title">Comparte</h2>
                    <i className="fas fa-chevron-down txt__color--grey-dark"></i>
                </div>
                <div className="form__submit collapsable__container collapsable__item">
                    <div className="form__success-button collapsable__container">
                        <button type="submit" className="form__button button-card"> <i className="far fa-address-card"></i>
                            <span className="form__button-text">Crear tarjeta</span>
                        </button>
                    </div>
                    <div className="form__success-twitter collapsable__container hidden">
                        <h2 className="succes__title txt__color--grey-dark">La tarjeta ha sido creada con exito</h2>
                        {/*<a href="https://adalab.es/" className="success__link" target="_blank"></a>*/}
                        {/*<a href="https://adalab.es/" className="success__button-twitter button-twitter twitter-share-button"
                  target="_blank"
                     <i className="fab fa-twitter "></i>
                      <span className="success__button-text">Compartir en twitter</span>
    </a>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;