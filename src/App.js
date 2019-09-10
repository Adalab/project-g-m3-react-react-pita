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
      name : '',
      job : '',
      phone : ''
    }
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
    this.onKeyUpListenerJob = this.onKeyUpListenerJob.bind(this);

  }

  onKeyUpListener(event) {
    const name = event.currentTarget.value;
    this.setState({
      name : name
    });
  }

  onKeyUpListenerJob(event) {
    const job = event.currentTarget.value;
    this.setState({
      job : job
    });
  }

  render() {
    return (
      // <LandingMain />
      <Cards
        defaultInput={defaultInput}
        name={this.state.name}
        job={this.state.job}
        onKeyUpListener={this.onKeyUpListener}
        onKeyUpListenerJob={this.onKeyUpListenerJob}

      />
    );
  }
}

export default App;

