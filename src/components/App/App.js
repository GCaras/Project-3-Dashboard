import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import ModuleList from '../ModuleList/ModuleList'
import NewsModule from "../SingleModule/NewsModule"
import SocialMediaModule from "../SingleModule/SocialMediaModule"
import WeatherModule from "../SingleModule/WeatherModule"
import CustomSingleModule from '../SingleModule/CustomSingleModule'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <ModuleList />
        <NewsModule />
        <SocialMediaModule />
        <WeatherModule />
        <CustomSingleModule />
      </div>
    )
  }
}

export default App;
