import React, { Component } from 'react';
import './scss/main.scss';
/*import LandingMain from './components/LandingMain';*/
import Cards from './components/Cards';

/*<LandingMain />*/
const colorPallete1=['#104E43','#438792','#a2deaf'];
const colorPallete2=['#420101','#bd1010','#e95626'];
const colorPallete3 =['#3e5b65','#eab052','#a0c0cf'];

class App extends Component {
  render() {
    return (
    
    <Cards color={colorPallete1} color2={colorPallete2} color3={colorPallete3}/>
    );
  }
}

export default App;

