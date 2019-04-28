import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class MiraCostaCollege extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #FEB5B7 0%, #E55C60 67%, #A31B1E 100%)'}
		return (
			<div className="mccd">
				<Hero heading="Mira Costa College Dance" 
					alt="Mira Costa College Dance" 
					image={`${process.env.PUBLIC_URL}/images/MCC_Devices.png`}
					style={heroGradient}/>
				<Overview overview="An elegant single-page website featuring course information related to Mira Costa College Dance Department."
						myRole="Web Designer/Developer"
						context="College Course Group Project"
						year="2014"/>
				<div className="mccd__content">
					<Content />
					<Button buttonText="Visit Website" href="https://mccdance.surge.sh"/>
				</div>
				<div className="row">
					<Form />
				</div>
			</div>
		);
	}
}

export default MiraCostaCollege;
