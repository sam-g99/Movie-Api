import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Buttons extends Component {
  render() {
    return (

    <div className={`btn ${this.props.buttonStyle}`} onClick={this.props.onClick}>
        <span>{this.props.text}</span>
        {this.props.svg}
    </div>

    )
  }
}
export default withRouter(Buttons)