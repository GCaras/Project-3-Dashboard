import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import ModuleList from '../ModuleList/ModuleList'
import NewsModule from "../SingleModule/NewsModule"
import SocialMediaModule from "../SingleModule/SocialMediaModule"
import WeatherModule from "../SingleModule/WeatherModule"
import CustomSingleModule from '../SingleModule/CustomSingleModule'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      News: [],
      SocialMedia: [],
      Weather: []
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <section>
          <Route 
            path="/"
            exact
            render={props => <ModuleList {...props} {...this.state} />}
          />
          <Route
            path="/News/"
            exact
            render={props => <NewsModule {...props} {...this.state.News} />}
          />
          <Route
            path="/Twitter/"
            exact
            render={props => <SocialMediaModule {...props} {...this.state.SocialMedia} />}
          />
          <Route
            path="/Weather/"
            exact
            render={props => <WeatherModule {...props} {...this.state.Weather} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
