import React, { Component } from "react";
import PropTypes from 'prop-types';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { avatar, isAvatarDefault } = this.props
    
    return (
      <div className="fill__items items-photo">
        <label className="field__tag tag-photo" htmlFor="img-selector">Imagen de perfil</label>
        <input type="file" name="img-selector" id="img-selector"
          className=" js__profile-upload-btn no-visible" onChange={this.uploadImage} ref={this.myFileField} required />
        <div className="photo__box">
          <button type="button" className="form__field form__field-photo js__profile-trigger" onClick={this.handleFilePicker}>Añadir imagen</button>
          <div className="preview__photo js__profile-preview" style={this.getPreview(isAvatarDefault, avatar)}></div>
        </div>
      </div>
    );
  }
}

// GetAvatar.propTypes = {
//   isAvatarDefault: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   updateAvatar: PropTypes.func.isRequired
// };

export default GetAvatar;
