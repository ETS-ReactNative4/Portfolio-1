import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Buzztime from './pages/bzt/Buzztime';
import Caida from './pages/caida/Caida';
import SouthCoastSurety from './pages/scs/SouthCoastSurety';
import MiraCostaCollege from './pages/mcc/MiraCostaCollege';
import DicePoker from './pages/dice-poker/DicePoker';
import IPlayYouListen from './pages/ipyl/IPlayYouListen';
import Countdown from './pages/countdown/Countdown';
import Footer from './pages/templates/Footer';
import Navigation from './pages/templates/Navigation';
import PageNav from './pages/templates/PageNav';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					{
						window.location.pathname !== '/' ? <PageNav/> : null
					}
					<Route exact path="/" component={Home} />
					<Route path='/buzztime' component={Buzztime} />
					<Route path='/caida' component={Caida} />
					<Route path='/south-coast-surety' component={SouthCoastSurety} />
					<Route path='/mira-costa-college-dance' component={MiraCostaCollege} />
					<Route path='/countdown' component={Countdown} />
					<Route path='/dice-poker' component={DicePoker} />
					<Route path='/iplayyoulisten' component={IPlayYouListen} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;