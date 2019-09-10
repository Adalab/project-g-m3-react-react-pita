import React from 'react';
import PropTypes from 'prop-types'; 

class Card extends React.Component {
  render() {
    return (
      <div className={`preview-card js__preview-card preview-card-${this.props.namePalette}`}>
        <div className="preview-card__title-container">
          <h4 className="preview-card__name">
            {(this.props.FullName) ? this.props.FullName : this.props.defaultInput.name}
          </h4>
          <h5 className="preview-card__career">{(this.props.job) ? this.props.job : this.props.defaultInput.job}</h5>
        </div>
        <div className="preview-card__img js__profile-image" style={{ backgroundImage: `url(${this.props.defaultInput.image})` }}></div>
        <ul className="preview-card__social-list">
          <li className={`social-list__item ${(this.props.phone) ? '' : 'hidden'}`}><a href="#phone" target="_blank" className="social-list__link phone__link">
            <i className="fas fa-mobile-alt social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(this.props.mail) ? '' : 'hidden'}`}><a href="#email" target="_blank" className="social-list__link email__link">
            <i className="far fa-envelope social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(this.props.linkedin) ? '' : 'hidden'}`}> <a href="#linkedin" target="_blank" className="social-list__link linkedin__link">
            <i className="fab fa-linkedin-in social-list__icon"></i>
          </a>
          </li>
          <li className={`social-list__item ${(this.props.github) ? '' : 'hidden'}`}> <a href="#github" target="_blank" className="social-list__link github__link">
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