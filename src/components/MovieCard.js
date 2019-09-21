import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Button from './Button';
class MovieCard extends Component {
	state = {
		src: ''
	};
	descriptionShortener = d => {
		if (d.length < 150) {
			return d;
		}
		return d.replace(/^(.{150}[^\s]*).*/, '$1') + '...';
	};
	titleShortener = d => {
		if (d.replace(/\s+/g, '').length <= 30) {
			return d;
		}
		return d.replace(/^(.{30}[^\s]*).*/, '$1') + '...';
	};
	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US`
		)
			.then(d => d.json())
			.then(data => {
				if (data.results[0] !== undefined) {
					this.setState({ src: data.results[0].key });
				}
			});
	}
	render() {
		return (
			<div className="movie-card">
				<h3>{this.titleShortener(this.props.title)}</h3>
				<div
					className={`full-title ${
						this.props.title.replace(/\s+/g, '').length > 30
							? ''
							: 'hide'
					}`}
				>
					{this.props.title}
				</div>
				<p>{moment(this.props.released).format('MMMM Do YYYY')}</p>
				<p className="description">
					{this.descriptionShortener(this.props.description)}
				</p>
				<img
					src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.image}`}
					alt="movie poster"
				/>
				<div className="button-container">
					<Button
						buttonStyle={
							this.state.src === '' ? 'disabled' : 'video'
						}
						text={
							this.state.src === ''
								? 'No Trailer'
								: 'Play Trailer'
						}
						svg={this.state.src === '' ? '' : buttonSvg}
						onClick={() => {
							this.props.onSrc(this.state.src);
						}}
					/>
					<Button
						buttonStyle="more"
						text="More Info"
						onClick={() => {
							this.props.history.push(`/movie/${this.props.id}`);
						}}
					/>
				</div>
			</div>
		);
	}
}

const buttonSvg = (
	<svg
		width="12"
		height="15"
		viewBox="0 0 12 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.5 6.63398C12.1667 7.01888 12.1667 7.98112 11.5 8.36602L1.75 13.9952C1.08333 14.3801 0.25 13.899 0.25 13.1292V1.87083C0.25 1.10103 1.08333 0.619909 1.75 1.00481L11.5 6.63398Z"
			fill="#D64B57"
		/>
	</svg>
);

export default withRouter(MovieCard);
