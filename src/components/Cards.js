import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="page__cards">
        <header className="page__header">
          <h1 className="header__title">Awesome profile-cards</h1>
        </header>
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
          <form className="form__container" action="POST">
            <fieldset className="collapsable user_colors">
              <div className="collapsable__header collapsable__colors"> <i className="far fa-object-ungroup txt__color--orange"></i>

                <h2 className="collapsable__title title__colors">Diseña</h2>
                <i className="fas fa-chevron-down txt__color--grey-dark collapsable--rotate"></i>

              </div>
              <div className="palette collapsable__item collapsable--visible">
                <label className="palette__label" htmlFor="p1">colores</label>
                <div className="palette__container-colors">
                  <div className="input-box">
                    <input className="palette__radio js__radio1" id="p1" type="radio" value="1" name="palette" checked/>
                      <ul className="colors">
                        {/* <li className="square-color" style={{backgroundColor: rgb(17, 78, 78)}}>dark green blue</li>
                        <li className="square-color" style={{backgroundColor: #438792"}}>dirty blue</li>
                        <li className="square-color" style="background-color: #a2deaf">hospital green</li> */}
                      </ul>
                  </div>
                  <label className="palette__label" htmlFor="p2"></label>
                    <div className="input-box">
                      <input className="palette__radio js__radio2" id="p2" type="radio" value="2"
                        name="palette"/>
                        <ul className="colors">
                          <li className="square-color" style="background-color: #420101">dried blood</li>
                          <li className="square-color" style="background-color: #bd1010">rusty red</li>
                          <li className="square-color" style="background-color: #e95626">tomato</li>
                        </ul>
                            </div>
                      <label className="palette__label" htmlFor="p3"></label>
                      <div className="input-box">
                        <input className="palette__radio js__radio3" id="p3" type="radio" value="3"
                          name="palette"/>
                          <ul className="colors">
                            <li className="square-color" style="background-color: #3e5b65">slate</li>
                            <li className="square-color" style="background-color: #eab052">faded orange</li>
                            <li className="square-color" style="background-color: #a0c0cf">light grey blue</li>
                          </ul>
                            </div>
                      </div>
                    </div>
                </fieldset>
                  <fieldset className="collapsable form__fill">
                    <div className="collapsable__header collapsable__fill"> <i className="far fa-keyboard txt__color--orange"></i>

                      <h3 className="collapsable__title title__fill">rellena</h3>
                      <i className="fas fa-chevron-down txt__color--grey-dark"></i>

                    </div>
                    <div className="fill__container collapsable__item">
                      <div className="fill__items items-name">
                        <label className="field__tag tag-name" htmlFor="FullName">nombre completo</label>
                        <input className="form__field form__field-name" type="text"
                          id="FullName" name="FullName" placeholder="Ej: Sally Jill" required/>
                        </div>
                        <div className="fill__items items-job">
                          <label className="field__tag tag-job" htmlFor="job">puesto</label>
                          <input className="form__field form__field-job" type="text" id="job"
                            name="job" placeholder="Ej: Front-end unicorn" required/>
                        </div>
                          <div className="fill__items items-photo">
                            <label className="field__tag tag-photo" htmlFor="img-selector">Imagen de perfil</label>
                            <input type="file" name="img-selector" id="img-selector"
                              className=" js__profile-upload-btn no-visible" required/>
                              <div className="photo__box">
                                <button type="button" className="form__field form__field-photo js__profile-trigger">Añadir imagen</button>
                                <div className="preview__photo js__profile-preview"></div>
                              </div>
                        </div>
                            <div className="fill__items items-phone">
                              <label className="field__tag tag-phone" htmlFor="phone">teléfono</label>
                              <input className="form__field form__field-phone" type="tel"
                                id="phone" name="phone" placeholder="Ej:555-55-55-55"/>
                                <div className="fill__items items-email">
                                  <label className="field__tag tag-mail" htmlFor="mail">email</label>
                                  <input className="form__field form__field-mail" type="email"
                                    id="mail" name="mail" placeholder="Ej:sally-hill@gmail.com" required/>
                            </div>
                                </div>
                                <div className="fill__items items-linkedin">
                                  <label className="field__tag tag-linkedin" htmlFor="linkedin">linkedin</label>
                                  <input className="form__field form__field-linkedin" type="text"
                                    id="linkedin" name="linkedin" placeholder="Ej:sally.hill" required/>
                        </div>
                                  <div className="fill__items items-github">
                                    <label className="field__tag tag-github" htmlFor="github">github</label>
                                    <input className="form__field form__field-github" type="text"
                                      id="github" name="github" placeholder="Ej:@sally-hill" required/>
                        </div>
                                  </div>
                </fieldset>
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
                                      <a href="" className="success__link" target="_blank"></a>
                                      <a href="" className="success__button-twitter button-twitter twitter-share-button"
                                        target="_blank">
                                        <i className="fab fa-twitter "></i>
                                        <span className="success__button-text">Compartir en twitter</span>
                                      </a>

                                    </div>
                                  </div>
                                </div>
            </form>
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