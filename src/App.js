import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import {defaultImg} from './components/defaultImg';

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
      namePalette : '',
      avatar: defaultImg
		}, 
		defaultInput : {
      FullName: 'Nombre y apellidos',
      job: 'Front-end developer',
      avatar: defaultImg
    },
    cid:'c01',
    isAvatarDefault: true,
	}
    this.onChangeListener = this.onChangeListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);
    this.handleCollasible=this.handleCollasible.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const ls = JSON.parse(localStorage.getItem('User'));
    if (ls !== null) {
      this.setState((prevState) => ({
        formObject : {...prevState.formObject, ...ls.formObject}
      }));
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
    }
    // ,() => {localStorage.setItem('User', JSON.stringify(this.state))}
    )
  }

  updateAvatar(img) {
    this.setState(prevState => {
      const newProfile = {...prevState.formObject, avatar: img};
      return {
        formObject: newProfile,
        isAvatarDefault: false
      }
    },() => {localStorage.setItem('User', JSON.stringify(this.state))})
  }
  
  resetData() {
    localStorage.removeItem('User');
    this.setState({
      formObject : {
        palette : 1, 
        FullName : '',
        job : '',
        phone : '',
        mail : '',
        linkedin : '',
        github : '',
        namePalette : '',
        avatar: defaultImg
      }
    })
  }

  render() {
    const {defaultInput, formObject, isAvatarDefault, cid} = this.state;
    return (
      <Switch>
	      <Route exact path="/" component={ LandingMain }></Route>
        <Route path="/cards" render={() => <Cards 
          defaultInput={defaultInput}
          formObject={formObject}
          isAvatarDefault={isAvatarDefault}
          onChangeListener={this.onChangeListener}
          onClickPalette={this.onClickPalette}
          cid={cid}
          handleCollasible={this.handleCollasible}
          updateAvatar={this.updateAvatar}
          resetData={this.resetData}/>}></Route>
      </Switch>
    );
  }
}

export default App;

