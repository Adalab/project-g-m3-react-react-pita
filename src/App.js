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
    /*this.state = {
      defaultInput: defaultInput
    }*/
    this.name = '';
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }

  onKeyUpListener(event) {
    const name = event.currentTarget.value;
    this.name = name;
    console.log(this.name);
    this.forceUpdate();
  }

  render() {
    return (
      // <LandingMain />
      <Cards
        defaultInput={defaultInput}
        name={this.name}
        onKeyUpListener={this.onKeyUpListener}
      />
    );
  }
}

export default App;

