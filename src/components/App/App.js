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
      news: [
        {
          headline: "Intelligence panel has deal to hear whistleblower’s testimony",
          url: "https://www.washingtonpost.com/politics/intelligence-panel-has-deal-to-hear-whistleblowers-testimony/2019/09/29/fc22d084-e2e0-11e9-a6e8-8759c5c7f608_story.html",
          image: "https://www.washingtonpost.com/resizer/kUv5e4FfXnDM6KY4FwJwMsEEqoU=/1484x0/www.washingtonpost.com/rw/2010-2019/WashingtonPost/2019/09/30/Others/Images/2019-09-26/CaptiolHill033.JPG"
        }
      ],
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
            render={props => <NewsModule {...props} {...this.state.news} />}
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
