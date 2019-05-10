import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Button from '../components/Button'
import Trailer from '../components/Trailer'
class MoviePage extends Component {
  state = {
    movieData: {},
    topBilledCast: null,
    recommended: {},
    youtubeSrc:'',
    trailerSrc: '',
  }
  toggleSrc = (src) => { 
    if(this.state.trailerSrc === ''){
      this.setState({trailerSrc: src});
    }else{
      this.setState({trailerSrc: ''});
    }
    
  }
  componentDidMount() {
    const movieData = fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US`)
    const castData  = fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US`)
    const recommended = fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/recommendations?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US`)
    const video = fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=57440f72713333a308e3c60c8ed75e5c&language=en-US`)
    Promise.all([
      movieData.then(d => d.json()),
      castData.then(d => d.json()),
      recommended.then(d => d.json()),
      video.then(d => d.json())
    ]).then(([movie, cast, recommended, video]) => { 
      const topBilledCast = cast.cast.slice(0, 4).map(({character, name/*actor name*/, profile_path}, i) => {
        return (
          <div className="cast-container">
            <img src = {`https://image.tmdb.org/t/p/w185_and_h278_bestv2${profile_path}`} alt="actor profile"/>
            <div>
              <b>{character}</b><br></br>
              {name}
            </div>
          </div>
        )})
        const recommendation = recommended.results.slice(0, 3).map(({title, backdrop_path, id}, i) => {
          return (
            <div>
              <a href={`/movie/${id}`}>
              <img src = {`https://image.tmdb.org/t/p/w250_and_h141_bestv2${backdrop_path}`} alt="recommended poster"/>
              </a>
              <h2>{title}</h2>
            </div>
          )})
            
      this.setState({movieData: movie, topBilledCast:topBilledCast, recommend: recommendation, youtubeSrc: video.results[0].key});
    })
  }

  render() {
    const movie= this.state.movieData;
    return (
      <div className="movie-page-container">
      <Trailer
        src = {this.state.trailerSrc}
        close = {this.toggleSrc}
      />
      <div className="main-movie">
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="movie poster"/>
      <div className="info">
      <h1>
        {movie.title}
       </h1>
        <p className="release">Theatrical Release - {moment(movie.release_date).format('MMMM Do YYYY') }</p>
        <p className="main-description">{movie.overview}</p>
        <div  className="button-container">
          <Button buttonStyle = 'video' text = 'Play Trailer' svg = {buttonSvg} onClick={() => {this.toggleSrc(this.state.youtubeSrc)}} />
        </div>
        <div className="movie-main-info">
          <div className="row">
            <p>Language: {movie.original_language}</p>
            <p>Revenue: ${parseInt(movie.revenue, 10).toLocaleString()}</p>
          </div>
          <div className="row">
            <p>Budget: ${parseInt(movie.budget, 10).toLocaleString()}</p>
            <p>Runtime: {movie.runtime} minutes</p>
          </div>
        </div>

      </div>
      
      </div>
       <h3>Top Billed Cast</h3>
        <div className="top-billed">
          {this.state.topBilledCast}
        </div>
        <h3>Liked this movie? Check these out</h3>
        <div className= "recommended">
        {this.state.recommend}
        </div>
          
        
      </div>
    )
  }
}
const buttonSvg = <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 6.63398C12.1667 7.01888 12.1667 7.98112 11.5 8.36602L1.75 13.9952C1.08333 14.3801 0.25 13.899 0.25 13.1292V1.87083C0.25 1.10103 1.08333 0.619909 1.75 1.00481L11.5 6.63398Z" fill="#D64B57"/>
</svg>;
export default withRouter(MoviePage)