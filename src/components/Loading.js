import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div>
         <div className={`loading ${this.props.loading ? '' : 'hide'}`}>
            <div className="loader"></div>
         </div>
      </div>
    )
  }
}
