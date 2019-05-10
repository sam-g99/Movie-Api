import React, {Component} from 'react'
import moment from 'moment'
import App from '../App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MoviePage from '../routes/MoviePage';
export default class  Navigation extends Component {
  state = {
    search: false,
    closed: true,
    navOpen: false
  }
  toggleNav = () => {
    this.setState(prevState => ({navOpen : !prevState.navOpen}))
  }
  searching = () => {
    if(this.state.search){
      setTimeout(() =>{this.setState({closed: true})}, 300)
    }else{
      this.setState({closed: false})
    }
    this.setState(prevState => ({search: !prevState.search}))
    
    
  }
  render(){
    return (
      <div className={this.state.search ? 'search' : ''}>
      <nav className = {this.state.closed ? 'hide-overflow' : ''}>
        <span className="logo">
        <Link to='/'>
          Movies
        </Link>
        </span>
          <ul>
            {links.map(({name, href}, i) => {
              return(
                <li key={i}><Link to={href}>{name}</Link></li>
              ) 
            })}
          </ul>
          <span className="date">
            {moment().format('MMMM Do YYYY')}
          </span>
          <div className={`svg-container ${this.state.search ? 'close' : ''}`} onClick={() =>this.searching()}>
          {searchIconSvg}
          {closeIconSvg}
          </div>
          <input type="text" placeholder="Hey there search some movies!" onKeyUp={() => {}}></input>
          <div className={`hamburger ${(this.state.navOpen) ? 'close' : ''}`} onClick={this.toggleNav}id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </nav>
      <div className={`mobile-nav ${(this.state.navOpen) ? '' : 'hide'}`}>
      <ul>
            {links.map(({name, href}, i) => {
              return(
                <li key={i}><Link to={href}>{name}</Link></li>
              ) 
            })}
          </ul>
      </div>
    </div>
    )
  }

}
const links = [
  {
    name: 'In Theaters',
    href: '/'
  },
  {
    name: 'Coming Soon',
    href: '/soon'
  },
  {
    name: 'Popular Movies',
    href: '/popular'
  }

]
const searchIconSvg = <svg className="search-icon" width="70" height="70" viewBox="0 0 57 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
          <ellipse cx="25.7247" cy="22.0399" rx="21.7247" ry="22.0399" fill="white"/>
          <rect width="31.8486" height="13.6464" rx="5" transform="matrix(0.711688 0.702496 -0.711688 0.702496 32.3335 22.0399)" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d" x="0" y="0" width="56.9154" height="59.9424" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
        </svg>;

const closeIconSvg = <svg className="close-icon" width="53" height="61" viewBox="0 0 53 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect width="61.342" height="13.1763" rx="6.58813" transform="matrix(0.642788 0.766044 -0.81484 0.579686 12.1528 0.685593)" fill="white"/>
<rect width="56.5117" height="13.1345" rx="6.56727" transform="matrix(0.642788 -0.766044 0.769685 0.638424 2.82129 45.3187)" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0.181641" y="3.22217" width="52.636" height="57.5557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
