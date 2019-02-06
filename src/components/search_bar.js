import React , { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term : '' };
	}

	render() {
		return (
			<div className="align-center">
				<input 
				className="searchbar"
				value = { this.state.term }
				placeholder="Search Youtube Videos..."
				onChange={ event => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;
