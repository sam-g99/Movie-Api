import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'
export default class Home extends Component {
  render() {
    return (
        <div>
            <MoviesList type="now_playing" title="In Theaters"/>
        </div>
    )
  }
}
