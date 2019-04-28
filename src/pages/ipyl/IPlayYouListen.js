import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class IPlayYouListen extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #06C49E 0%, #039F80 33%, #007A62 67%)'}
		return (
			<div className="ipyl">
				<Hero heading="iPlayYouListen" 
					alt="I Play You Listen" 
					image={`${process.env.PUBLIC_URL}/images/IPYL_Devices.png`}
					style={heroGradient}/>
				<Overview overview="A Web App designed to build custom spotify playlists and save them directly into your Spotify account."
						myRole="Web Designer/Developer"
						context="Personal Project"
						year="2018"/>
				<div className="ipyl__content">
					<Content />
					<Button buttonText="Visit Website" href="http://iplayyoulisten.surge.sh/"/>
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

export default IPlayYouListen;
