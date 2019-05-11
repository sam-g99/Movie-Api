import React, {Component} from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Navigation from  './components/Navigation'
import MoviePage from './routes/MoviePage'
import HomePage from './routes/Home'
import ComingSoon from './routes/ComingSoon'
import Popular from './routes/Popular'
class App extends Component {
  state = {
    loading: true
  }
  componentDidMount(){
    this.setState({loading: false})
  }
  render(){
  return (
    <Router>
      <div className="App">
      <Navigation/>
        <Route exact path="/" component={HomePage} />
        <Route path="/soon" component={ComingSoon} />
        <Route path="/popular" component={Popular} />
        <Route path="/movie/:id" component={MoviePage} />
      </div>
    </Router>
  );
}
}

export default App;
