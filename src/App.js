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
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);

  }

  onKeyUpListener(event) {
    const name = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({
      [id] : name
    });
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
    });
    return namePalette;
  }

  render() {
    return (
      // <LandingMain />
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
        onKeyUpListener={this.onKeyUpListener}
        onClickPalette={this.onClickPalette}

      />
    );
  }
}

export default App;

