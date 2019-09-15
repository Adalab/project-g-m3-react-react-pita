import React from 'react';
import PropTypes from 'prop-types'; 

class Card extends React.Component {
  render() {
	const {defaultInput, formObject} = this.props
    return (
      <div className={`preview-card js__preview-card preview-card-${formObject.namePalette}`}>
        <div className="preview-card__title-container">
          <h4 className="preview-card__name">
            {(formObject.FullName) ? formObject.FullName : defaultInput.name}
          </h4>
          <h5 className="preview-card__career">{(formObject.job) ? formObject.job : defaultInput.job}</h5>
        </div>
        <div className="preview-card__img js__profile-image" style={{ backgroundImage: `url(${defaultInput.image})` }}></div>
        <ul className="preview-card__social-list">
          <li className={`social-list__item ${(formObject.phone) ? '' : 'hidden'}`}><a href={`tel:${formObject.phone}`} target="_blank" rel="noopener noreferrer" className="social-list__link phone__link">
            <i className="fas fa-mobile-alt social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(formObject.mail) ? '' : 'hidden'}`}><a href={`mailto:${formObject.mail}`} target="_blank" rel="noopener noreferrer" className="social-list__link email__link">
            <i className="far fa-envelope social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(formObject.linkedin) ? '' : 'hidden'}`}> <a href={`https://www.linkedin.com/in/${formObject.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-list__link linkedin__link">
            <i className="fab fa-linkedin-in social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(formObject.github) ? '' : 'hidden'}`}> <a href={`https://github.com/${formObject.github}`} target="_blank" rel="noopener noreferrer" className="social-list__link github__link">
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