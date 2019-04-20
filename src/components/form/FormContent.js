import React, { Component } from 'react';
import Button from '../Button';
import SecondaryHeader from '../headers/SecondaryHeader';
import Starburst from '../starburst/Starburst';

class FormContent extends Component {
	render() {
		return(
            <form action="#" className="form" id="form">
            	<SecondaryHeader headline="Get in touch" />
            	<div className="orbit-path">
            		<Starburst circleStyle={ {backgroundColor: 'orange' } } 
            					starburstClass='starburst-container__orbit'/>
            	</div>
				<div className="form__group">
					<input type="text" className="form__input" placeholder="Name" id="name" pattern=".{2,}" required />
					<label for="name" className="form__label">Name</label>
				</div>

				<div className="form__group">
					<input type="tel" className="form__input" placeholder="Phone" id="tel" pattern='\d{3}[\-]\d{3}[\-]\d{4}' required />
					<label for="tel" className="form__label">Phone ex: 760-555-1234</label>
				</div>

				<div className="form__group">
					<input type="email" className="form__input" placeholder="Email" id="email" 
						pattern="[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"  
						required />
					<label for="email" className="form__label">Email</label>
				</div>

				<div className="form__group">
					<textarea form="form" className="form__input form__textarea" placeholder="Inquiry"  
						required />
					<label for="email" className="form__label">Inquiry</label>
				</div>

				<h3 className="heading-tertiary">Preferred contact method</h3>

				<div className="form__group u-margin-bottom-medium">
					<div className="form__radio-group">
						<input type="radio" className="form__radio-input" id="small" name="size" />
						<label for="small" className="form__radio-label" >
							<span className="form__radio-button"></span>
							Phone
						</label>
					</div>

					<div className="form__radio-group">
						<input type="radio" className="form__radio-input" id="large" name="size" />
						<label for="large" className="form__radio-label">
							<span className="form__radio-button"></span>
							Email
						</label>
					</div>
				</div>

				<div className="form__group">
					<Button buttonText="Drop a line" />
				</div>
            </form>
	    );
	}
}

export default FormContent;