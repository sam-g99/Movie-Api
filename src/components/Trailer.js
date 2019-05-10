import React, { Component } from 'react'

export default class Trailer extends Component {
  render() {
    return (
        <div className={`trailerContainer ${(this.props.src === '') ? 'hide' : 'show'}`} onClick={() => {this.props.close()}}>
            <div class="close-trailer">
                <div></div>
                <div></div>
            </div>
            <iframe 
             src={`https://www.youtube.com/embed/${this.props.src}`}
             title="trailer"
             />
        </div>
    )
  }
}
