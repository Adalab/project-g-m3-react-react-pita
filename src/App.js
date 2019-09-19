import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import {defaultImg} from './components/defaultImg';
import {petition} from './components/services/GetCard'; 

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
            email : '',
            phone : '',
			      linkedin : '',
			      github : '',
      		namePalette : '',
      		avatar: defaultImg
		}, 
		defaultInput : {
			name: 'Nombre y apellidos',
			job: 'Front-end developer',
			image: defaultImg
    },
    cid:'c01',
    isAvatarDefault: true,
    successLink:'',
    cardURL:'',
    twitterText: encodeURIComponent('Hey! This is my new profile card :)'),
    hashtags:encodeURIComponent('adalab,js,css')

	}
    this.onChangeListener = this.onChangeListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);
    this.handleCollasible=this.handleCollasible.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
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
    });
  }

  updateAvatar(img) {
    this.setState(({formObject}) => {
      const newProfile = {...formObject, avatar: img};
      return {
        formObject: newProfile,
        isAvatarDefault: false
      }
    });
  }

  sendRequest(event){
    event.preventDefault();
      const objectApi = {
          palette : this.state.formObject.palette, 
          name : this.state.formObject.FullName,
          job : this.state.formObject.job, 
          email : this.state.formObject.email, 
          phone : this.state.formObject.phone, 
          linkedin : this.state.formObject.linkedin, 
          github : this.state.formObject.github, 
          photo : this.state.formObject.avatar, 
      }
      console.log(objectApi)
     
      const newObjectApi=JSON.stringify(objectApi)
      petition(newObjectApi)
      .then (data => {
        this.setState({
        cardURL:data.cardURL
        },()=>console.log(data))
      })

  }
  
  render() {
    return (
      <Switch>
	      <Route exact path="/" component={ LandingMain }></Route>
        <Route path="/cards" render={() => <Cards 
          defaultInput={this.state.defaultInput}
          formObject={this.state.formObject}
          isAvatarDefault={this.state.isAvatarDefault}
          onChangeListener={this.onChangeListener}
          onClickPalette={this.onClickPalette}
          cid={this.state.cid}
          handleCollasible={this.handleCollasible}
          updateAvatar={this.updateAvatar}
          sendRequest={this.sendRequest}
          cardURL={this.state.cardURL}
          twitterText={this.state.twitterText}
          hashtags={this.state.hashtags}
          />}></Route>
      </Switch>
    );
  }
}

export default App;

