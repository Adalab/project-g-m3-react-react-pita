import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import {defaultImg} from './components/defaultImg';
// import GetAvatar from './components/GetAvatar';
/*<LandingMain />*/

class App extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.state = {
		formObject : {
      palette : 1, 
      FullName : '',
			job : '',
			phone : '',
			mail : '',
			linkedin : '',
			github : '',
      namePalette : ''
		}, 
		defaultInput : {
			name: 'Nombre y apellidos',
			job: 'Front-end developer',
			image: defaultImg
    },
    cid:'c01',
    isAvatarDefault: true,
    profile: {
      avatar: defaultImg
    }
	}
    this.onChangeListener = this.onChangeListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);
    this.handleCollasible=this.handleCollasible.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getPreview = this.getPreview.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const ls = JSON.parse(localStorage.getItem('User'));
    if (ls !== null) {
      this.setState({
        formObject : ls.formObject
      })
    };
  }

  onChangeListener(event) {
    const name = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState) =>({
	  formObject : {
		  ...prevState.formObject,
		  [id] : name
    }}),
    () => {
      localStorage.setItem('User', JSON.stringify(this.state));
    })
  }

  onClickPalette(event) {
    const palette = parseInt(event.currentTarget.value);
    let namePalette = '';
    if(palette === 1){
      namePalette = 'green';
    }else if(palette === 2){
      namePalette = 'red';
    }else{
      namePalette = 'yellow';
    }
    this.setState((prevState) =>({
		formObject : {
			...prevState.formObject,
			palette : palette, 
			namePalette : namePalette
	  }}),
    () => {localStorage.setItem('User', JSON.stringify(this.state));
    })
    return namePalette;
  }

  handleCollasible(event){
    const newCid = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
        if (newCid === prevState.cid) {
          return {
            cid: null
          }
        }else {
          return{
            cid: newCid
          }
        }
    });
  }

  updateAvatar(img) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, avatar: img};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
  }

  handleFilePicker () {
    this.myFileField.current.click();
  }
  
  uploadImage(event) {
    const myFile = event.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }
  
  getImage () {
    const image = this.fr.result;
    this.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }

  render() {
    return (
      <Switch>
	      <Route exact path="/" component={ LandingMain }></Route>
        <Route path="/cards" render={() => <Cards 
          defaultInput={this.state.defaultInput}
          formObject={this.state.formObject}
          onChangeListener={this.onChangeListener}
          onClickPalette={this.onClickPalette}
          cid={this.state.cid}
          handleCollasible={this.handleCollasible} 
          handleFilePicker={this.handleFilePicker}
          uploadImage={this.uploadImage}
          getPreview={this.getPreview}
          avatar={this.state.profile.avatar} 
          isAvatarDefault={this.isAvatarDefault}/>}></Route>
      </Switch>
    );
  }
}

export default App;

