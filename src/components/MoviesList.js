import React, { Component } from 'react'
import MovieCard from  './MovieCard'
import Trailer from './Trailer'
import Loading from './Loading'
export default class Home extends Component {
    state = {
        moviesInTheaters: null,
        trailerSrc: '',
        loading: true
    }
    showTrailer = (src) => {
        this.setState({trailerSrc: src})
    }
    closeTrailer = () => {
        this.setState({trailerSrc: ''})
    }
    componentDidMount() {
        const page1 = fetch(`https://api.themoviedb.org/3/movie/${this.props.type}?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US&page=1`);
        const page2 = fetch(`https://api.themoviedb.org/3/movie/${this.props.type}?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US&page=2`);
        Promise.all([
            page1.then(d => d.json()),
            page2.then(d => d.json())
        ])
        .then(([page1, page2]) => {
            let moviesInTheaters = [];
            page1.results.forEach((r) => {
                moviesInTheaters.push(r);
            })
            page2.results.forEach((r) => {
                moviesInTheaters.push(r);
            })

            moviesInTheaters = moviesInTheaters.map((movie) => {
                return (
                    <MovieCard 
                        title={movie.title} 
                        image={movie.poster_path} 
                        released={movie.release_date}
                        description = {movie.overview}
                        id = {movie.id}
                        onSrc = {this.showTrailer}
                    />
                )
            })
            this.setState({moviesInTheaters: moviesInTheaters, loading: false})
        })
    }
  render() {
    return (
        <div>
            <Loading
                loading = {this.state.loading}
            />
            <Trailer 
                src = {this.state.trailerSrc}
                close = {this.closeTrailer}
            />
            <h1 class="section-title">{this.props.title}</h1>
        <div className="movies-container">
            {this.state.moviesInTheaters}
        </div>
      </div>
    )
  }
}
