import React, { Component } from 'react';
import './scss/main.scss';
// import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import DefaultImg from './components/DefaultImg';

/*<LandingMain />*/


const defaultInput = {
  name: 'Nombre y apellidos',
  job: 'Front-end developer',
  image: DefaultImg,
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette : 1, 
      FullName : '',
      job : '',
      phone : '',
      mail : '',
      linkedin : '',
      github : '',
      namePalette : ''
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
    this.setState({
      [id] : name
    }, () => {localStorage.setItem('User', JSON.stringify(this.state))});
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
    this.setState({
      palette : palette,
      namePalette: namePalette
    }, () => {localStorage.setItem('User', JSON.stringify(this.state))});
    // return namePalette;
  }

  render() {
    return (
    //   <LandingMain />
      <Cards
        defaultInput={defaultInput}
        FullName={this.state.FullName}
        job={this.state.job}
        phone={this.state.phone}
        mail={this.state.mail}
        linkedin={this.state.linkedin}
        github={this.state.github}
        palette={this.state.palette}
        namePalette={this.state.namePalette}
        onChangeListener={this.onChangeListener}
        onClickPalette={this.onClickPalette}

      />
    );
  }
}

export default App;

