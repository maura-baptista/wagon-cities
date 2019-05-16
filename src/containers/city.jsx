import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions'; 

class City extends Component {

	handleclick = () => {
		this.props.setActiveCity(this.props.city);
	}

	render() {
		let classes = 'list-group-item';
		if(this.props.city === this.props.activeCity){
			classes += ' active';
		}

		return (
			<li className={classes} onClick={this.handleclick}>
				{this.props.city.name}
			</li>

	);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ setActiveCity: setActiveCity },
		dispatch
	);
} 

function mapStateToProps(state) {
 return {
 	activeCity: state.activeCity
 };
} 



export default connect (mapStateToProps, mapDispatchToProps) (City);