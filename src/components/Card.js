import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="preview-card js__preview-card">
        <div className="preview-card__title-container">
          <h4 className="preview-card__name">
            {(this.props.name) ? this.props.name : this.props.defaultInput.name}
          </h4>
          <h5 className="preview-card__career">{this.props.defaultInput.job}</h5>
        </div>
        <div className="preview-card__img js__profile-image" style={{ backgroundImage: `url(${this.props.defaultInput.image})` }}></div>
        <ul className="preview-card__social-list">
          <li className="social-list__item hidden"><a href="#phone" target="_blank" className="social-list__link phone__link">
            <i className="fas fa-mobile-alt social-list__icon"></i>
          </a>
          </li>
          <li className="social-list__item hidden"><a href="#email" target="_blank" className="social-list__link email__link">
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
    )
  }
}



export default Card;