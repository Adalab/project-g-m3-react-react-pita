import React, { Component } from 'react';
import './scss/main.scss';
// import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import DefaultImg from './components/DefaultImg';

/*<LandingMain />*/


class App extends Component {
  constructor(props) {
    super(props);
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
			image: DefaultImg
		  }

	}
    this.onChangeListener = this.onChangeListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const ls = JSON.parse(localStorage.getItem('User'));
    if (ls !== null) {
      this.setState({
        palette : ls.palette, 
        FullName : ls.FullName,
        job : ls.job,
        phone : ls.phone,
        mail : ls.mail,
        linkedin : ls.linkedin,
        github : ls.github,
        namePalette : ls.namePalette,
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
    }
    // ,() => {
    //   localStorage.setItem('User', JSON.stringify(this.state));
    // }
  }));
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
	  }
    }
    // , () => {localStorage.setItem('User', JSON.stringify(this.state))}
    ));

    return namePalette;
  }

  render() {
    return (
    //   <LandingMain />
      <Cards
        defaultInput={this.state.defaultInput}
        formObject={this.state.formObject}
        onChangeListener={this.onChangeListener}
        onClickPalette={this.onClickPalette}

      />
    );
  }
}

export default App;

