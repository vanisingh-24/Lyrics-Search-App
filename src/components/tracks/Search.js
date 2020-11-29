import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trackTitle: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (dispatch, e) => {
		e.preventDefault();
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
			)
			.then((res) => {
				dispatch({
					type: 'SEARCH_TRACKS',
					payload: res.data.message.body.track_list,
				});

				this.setState({
					trackTitle: '',
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className='card mb-3' style={{borderRadius: "20px"}}>
							<div className='card-body mb-4 p-4'>
								<h3 className='display-3 text-center' style={{fontWeight: "500"}}>
									<i className='fas fa-music'></i><strong> Search For A Song</strong>
								</h3>
								<p className='lead text-center' style={{fontSize: "20px", fontWeight: "bold"}}>Get the lyrics for any song</p>
								<form onSubmit={this.handleSubmit.bind(this, dispatch)}>
									<div className='form-group' style={{color: "#495057", borderRadius: "0.25rem", fontWeight: "400"}}>
										<input
											type='text'
											className='form-control input-lg'
											placeholder='Song Title...'
											name='trackTitle'
											value={this.state.trackTitle}
											onChange={this.handleChange}
										/>
									</div>
									<button className='btn btn-primary btn-lg btn-block search-btn' style={{borderRadius: "20px"}}>
										<strong>Get Track Lyrics</strong>
									</button>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;