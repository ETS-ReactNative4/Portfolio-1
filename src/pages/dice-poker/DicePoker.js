import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class DicePoker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: ''
		}
		this.initiateProgram = this.initiateProgram.bind(this);
	}

	initiateProgram() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch ('api/dice-poker');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	}

	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #54DB6C 0%, #00cf23 33%, #008417 67%)'}
		return (
			<div className="dice-poker">
				<Hero heading="Interactive Dice Poker" 
					alt="Dice Poker Devices" 
					image={`${process.env.PUBLIC_URL}/images/DicePoker_Devices.png`}
					style={heroGradient}/>
				<Overview overview="A poker game with a graphical user interface that simulates dice rolls and tracks high scores."
						myRole="Python Developer"
						context="Personal Project"
						year="2017"/>
				<div className="dice-poker__content">
					<Content />
					<p>{this.state.response}</p>
					<Button buttonText="Run program" onClick={this.initiateProgram}/>
				</div>
				<div className="row">
					<div className="form-container" 
						style={{ backgroundImage: "linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(" + process.env.PUBLIC_URL + "/images/MilkyWay.jpg)" }}>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default DicePoker;
