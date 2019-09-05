import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Submit from './Submit';

const colorPallete1 = ['#104E43', '#438792', '#a2deaf'];
const colorPallete2 = ['#420101', '#bd1010', '#e95626'];
const colorPallete3 = ['#3e5b65', '#eab052', '#a0c0cf'];

class CardForm extends React.Component {
	render() {
		return (
			<form className="form__container" action="POST">
				<Design color={colorPallete1} color2={colorPallete2} color3={colorPallete3} />
				<Fill />
				<Submit />
			</form>
		)
	}
}

export default CardForm; 