import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'
export default class Home extends Component {
  render() {
    return (
        <div>
            <MoviesList type="popular" title="Popular"/>
        </div>
    )
  }
}
