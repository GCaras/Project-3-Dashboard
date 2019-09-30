import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import ModuleList from '../ModuleList/ModuleList'
import NewsModule from "../SingleModule/NewsModule"
import SocialMediaModule from "../SingleModule/SocialMediaModule"
import WeatherModule from "../SingleModule/WeatherModule"
import ToDoList from "../SingleModule/ToDoList"
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: ["TEST NEWS"],
      socialMedia: ["TEST SOCIAL MEDIA"],
      weather: ["TEST WEATHER"],
      toDo: ["TEST TO DO"],
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
          <Route
            path="/ToDo/"
            exact
            render={props => <ToDoList {...props} {...this.state.toDo} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
