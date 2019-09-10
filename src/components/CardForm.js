import React from 'react';
import Collapsables from './Collapsables';
import PropTypes from 'prop-types'; 

class CardForm extends React.Component {
	render() {
		return (
			<form className="form__container" action="POST">
				<Collapsables >
				<fieldset className="collapsable user_colors">
                <div className="collapsable__header collapsable__colors"> <i className="far fa-object-ungroup txt__color--orange"></i>
                <h2 className="collapsable__title title__colors">Diseña</h2>
                <i className="fas fa-chevron-down txt__color--grey-dark collapsable--rotate"></i>
                </div>
                <div className="palette collapsable__item collapsable--visible">
                    <label className="palette__label" htmlFor="p1">colores</label>
                    <div className="palette__container-colors">
                        <div className="input-box">
                            <input className="palette__radio js__radio1" id="p1" type="radio" value="1" name="palette" />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color[0] }}>dark green blue</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color[1] }}>dirty blue</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color[2] }}>hospital green</li>
                            </ul>
                        </div>
                        <label className="palette__label" htmlFor="p2"></label>
                        <div className="input-box">
                            <input className="palette__radio js__radio2" id="p2" type="radio" value="2"
                                name="palette" />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color2[0] }}>dried blood</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color2[1] }}>rusty red</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color2[2] }}>tomato</li>
                            </ul>
                        </div>
                        <label className="palette__label" htmlFor="p3"></label>
                        <div className="input-box">
                            <input className="palette__radio js__radio3" id="p3" type="radio" value="3"
                                name="palette" />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color3[0] }}>slate</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color3[1] }}>faded orange</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color3[2] }}>light grey blue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
				</Collapsables>
				<Collapsables>
				<fieldset className="collapsable form__fill">
                <div className="collapsable__header collapsable__fill"> <i className="far fa-keyboard txt__color--orange"></i>
                    <h3 className="collapsable__title title__fill">rellena</h3>
                    <i className="fas fa-chevron-down txt__color--grey-dark"></i>
                </div>
                <div className="fill__container collapsable__item">
                    <div className="fill__items items-name">
                        <label className="field__tag tag-name" htmlFor="FullName">nombre completo</label>
                        <input className="form__field form__field-name" type="text"
                            id="FullName" name="FullName" placeholder="Ej: Sally Jill" required onKeyUp={this.props.onKeyUpListener}/>
                    </div>
                    <div className="fill__items items-job">
                        <label className="field__tag tag-job" htmlFor="job">puesto</label>
                        <input className="form__field form__field-job" type="text" id="job"
                            name="job" placeholder="Ej: Front-end unicorn" onKeyUp={this.props.onKeyUpListener} required />
                    </div>
                    <div className="fill__items items-photo">
                        <label className="field__tag tag-photo" htmlFor="img-selector">Imagen de perfil</label>
                        <input type="file" name="img-selector" id="img-selector"
                            className=" js__profile-upload-btn no-visible" required />
                        <div className="photo__box">
                            <button type="button" className="form__field form__field-photo js__profile-trigger">Añadir imagen</button>
                            <div className="preview__photo js__profile-preview"></div>
                        </div>
                    </div>
                    <div className="fill__items items-phone">
                        <label className="field__tag tag-phone" htmlFor="phone">teléfono</label>
                        <input className="form__field form__field-phone" type="tel"
                            id="phone" name="phone" placeholder="Ej:555-55-55-55" onKeyUp={this.props.onKeyUpListener}/>
                        <div className="fill__items items-email">
                            <label className="field__tag tag-mail" htmlFor="mail">email</label>
                            <input className="form__field form__field-mail" type="email"
                                id="mail" name="mail" placeholder="Ej:sally-hill@gmail.com" required />
                        </div>
                    </div>
                    <div className="fill__items items-linkedin">
                        <label className="field__tag tag-linkedin" htmlFor="linkedin">linkedin</label>
                        <input className="form__field form__field-linkedin" type="text"
                            id="linkedin" name="linkedin" placeholder="Ej:sally.hill" required />
                    </div>
                    <div className="fill__items items-github">
                        <label className="field__tag tag-github" htmlFor="github">github</label>
                        <input className="form__field form__field-github" type="text"
                            id="github" name="github" placeholder="Ej:@sally-hill" required />
                    </div>
                </div>
            </fieldset>
				</Collapsables>
				<Collapsables>
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
                        {/* <a href={this.props.linkAdalab} className="success__link" target="_blank">patata</a> */}
                        {/* <a href={this.props.linkAdalab} className="success__button-twitter button-twitter twitter-share-button" target="_blank">
                     <i className="fab fa-twitter "></i>
                      <span className="success__button-text">Compartir en twitter</span>
    				</a> */}
                    </div>
                </div>
            </div>
			</Collapsables>
			</form>
		)
	}
}

CardForm.propTypes = {
	color: PropTypes.array
	// linkAdalab: PropTypes.string, 
}; 

export default CardForm; 