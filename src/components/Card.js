import React from 'react';
import PropTypes from 'prop-types'; 

class Card extends React.Component {
  render() {
    const {inputValues, defaultInput} = this.props;

    return (
      <div className={`preview-card js__preview-card preview-card-${inputValues.namePalette}`}>
        <div className="preview-card__title-container">
          <h4 className="preview-card__name">
            {(inputValues.FullName) ? inputValues.FullName : defaultInput.name}
          </h4>
          <h5 className="preview-card__career">{(inputValues.job) ? inputValues.job : defaultInput.job}</h5>
        </div>
        <div className="preview-card__img js__profile-image" style={{ backgroundImage: `url(${defaultInput.image})` }}></div>
        <ul className="preview-card__social-list">
          <li className={`social-list__item ${(inputValues.phone) ? '' : 'hidden'}`}><a href="#phone" target="_blank" className="social-list__link phone__link">
            <i className="fas fa-mobile-alt social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(inputValues.mail) ? '' : 'hidden'}`}><a href="#email" target="_blank" className="social-list__link email__link">
            <i className="far fa-envelope social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(inputValues.linkedin) ? '' : 'hidden'}`}> <a href="#linkedin" target="_blank" className="social-list__link linkedin__link">
            <i className="fab fa-linkedin-in social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(inputValues.github) ? '' : 'hidden'}`}> <a href="#github" target="_blank" className="social-list__link github__link">
            <i className="fab fa-github-alt social-list__icon"></i>
          </a>

          </li>
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
    FullName:PropTypes.string,
    job:PropTypes.string,
    phone : PropTypes.string,
    mail : PropTypes.string,
    linkedin : PropTypes.string,
    github : PropTypes.string,
    namePalette : PropTypes.string,
    defaultInput:PropTypes.object

    // linkAdalab: PropTypes.string, 
}; 

export default Card;