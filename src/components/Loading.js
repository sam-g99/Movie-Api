import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div>
         <div class={`loading ${this.props.loading ? '' : 'hide'}`}></div>
      </div>
    )
  }
}
