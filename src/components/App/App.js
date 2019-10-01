import React, { Component } from 'react'
import TasksList from '../TasksList/TasksList'
import ToDoList from '../TaskComponents/ToDo/ToDoList'
import ToDoTask from '../TaskComponents/ToDo/ToDoTask'
import ToWatchList from '../TaskComponents/ToWatch/ToWatchList'
import ToReadList from '../TaskComponents/ToRead/ToReadList'
import { Route, Link } from 'react-router-dom'

const taskURL = "https://todolist-sei32.herokuapp.com/";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDo: [],
      toWatch: [],
      toRead: []
    }
  }

  componentDidMount() {
    this.fetchToDo();
    this.fetchToWatch();
    this.fetchToRead();
  }

  fetchToDo() {
    fetch(taskURL+"todo/")
      .then( response => response.json()
      .then( (parsedJson) => {
        this.setState({
          toDo: parsedJson
        })
      }))
  }

  fetchToWatch() {
    fetch(taskURL+"towatch/")
      .then( response => response.json()
      .then( (parsedJson) => {
        this.setState({
          toWatch: parsedJson
        })
      }))
  }

  fetchToRead() {
    fetch(taskURL+"toread/")
      .then( response => response.json()
      .then( (parsedJson) => {
        this.setState({
          toRead: parsedJson
        })
      }))
  }

  render () {
    return (
      <div>
        <Link to="/">
          <h1>YouDue</h1>
        </Link>
        <section>
          <Route 
            path="/"
            exact
            render={props => <TasksList {...props} {...this.state} />}
          />
          <Route
            path="/ToDo/"
            exact
            render={props => <ToDoList {...props} {...this.state} />}
          />
          <Route
            path="/ToWatch/"
            exact
            render={props => <ToWatchList {...props} {...this.state} />}
          />
          <Route
            path="/ToRead/"
            exact
            render={props => <ToReadList {...props} {...this.state} />}
          />
          {/* <Route
            path="/ToDo/:task"
            exact
            render={props => <ToDoTask {...props} {...this.state} />}
          /> */}
        </section>
      </div>
    )
  }
}

export default App;
