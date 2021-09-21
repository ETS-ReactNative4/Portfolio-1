import React, { Component } from 'react';
import Button from '../../components/Button';
import Hero from '../templates/Hero';
import Overview from '../templates/Overview';
import Content from './Content';
import Form from '../../components/form/Form';

class Buzztime extends Component {
	render() {
		let heroGradient = {backgroundImage: 'linear-gradient(to right top, #06c1ff 0%, #00a9e0 67%, #00769D 100%)'}
		return (
			<div className="buzztime">
				<Hero heading="Buzztime" 
					alt="Buzztime" 
					image={`${process.env.PUBLIC_URL}/images/BZT_Devices.png`}
					style={heroGradient}/>
				<Overview overview="I develop for a suite of websites and apps that help market Buzztime to businesses and engage the customers of those businesses."
						myRole="Web Developer"
						context={<React.Fragment>Full-Time: 2013 - 2019<br/>Contract: 2019 - Present</React.Fragment>}
						year={<React.Fragment>Digital Marketing: 2013 - 2016<br/>Web Development: 2016 - Present</React.Fragment>}/>
				<div className="buzztime__content">
					<Content />
					<Button buttonText="View Website" href="https://www.buzztime.com" onClick={this.initiateProgram}/>
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

export default Buzztime;
