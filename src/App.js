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
      github : ''
    }
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }

  onKeyUpListener(event) {
    const name = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({
      [id] : name
    });
  }

  render() {
    return (
      // <LandingMain />
      <Cards
        defaultInput={defaultInput}
        name={this.state.FullName}
        job={this.state.job}
        phone={this.state.phone}
        mail={this.state.mail}
        linkedin={this.state.linkedin}
        github={this.state.github}
        onKeyUpListener={this.onKeyUpListener}
      />
    );
  }
}

export default App;

