import React, { Component } from 'react'
import { connect } from 'react-redux';



class ActiveCity extends Component {

	render() {
		const style ={
			// display: "flex",
			// justifyContent: "space-around",
			// alignItems: "center"	

			}

		let selectedCity = 
			<div className="active-city default-active-city" style={style}>
				<h3>Select a city...</h3>
			</div>
		

		if(this.props.activeCity) {
			let style = {
				backgroundImage: `url(https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug})`,
				height: "90%",
				backgroundSize: "cover",
			}
			selectedCity = 
				<div className="active-city" >
					<h3>{this.props.activeCity.name}</h3>
					<p>{this.props.activeCity.address}</p>
					<div style={style}></div>
				</div>
			
		}
		
		return (
			selectedCity
		);
	}
}

function mapStateToProps(state) {
 return {
 	activeCity: state.activeCity
 };
} 


export default connect(mapStateToProps)(ActiveCity);