import React, { Component } from 'react'
import TaskList from '../TasksList/TasksList'
import NewTaskList from '../NewTask/NewTaskMenu'
import NewDoTask from '../TaskComponents/ToDo/NewDoTask'
import NewWatchTask from '../TaskComponents/ToWatch/NewWatchTask'
import NewReadTask from '../TaskComponents/ToRead/NewReadTask'
import ToDoList from '../TaskComponents/ToDo/ToDoList'
import DoTask from "../TaskComponents/ToDo/ToDoTask"
import { Route, Link } from 'react-router-dom'
import './App.css'

const taskURL = "https://todolist-sei32.herokuapp.com/";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch(taskURL+"index")
      .then( response => response.json()
      .then( (parsedJson) => {
        this.setState({
          tasks: parsedJson
        })
      }))
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <Link to="/">
            <h1 className="logo">YouDue<span role="img">	&#x270F;&#xFE0F; </span></h1>
          </Link>
          <Link to="/NewTask/">
            <h4>Create New Task</h4>
          </Link>
          <h2 className="motto"> Getting things done, when you want.</h2>
        </nav>
        <section>
          <Route 
            path="/"
            exact
            render={props => <TaskList {...props} {...this.state} />}
          />
          <Route
            path="/NewTask/"
            exact
            render={props => <NewTaskList {...props} {...this.state} />}
          />
          <Route
            path="/NewToDo/"
            exact
            render={props => <NewDoTask {...props} {...this.state} />}
          />
          <Route
            path="/NewToWatch/"
            exact
            render={props => <NewWatchTask {...props} {...this.state} />}
          />
          <Route
            path="/NewToRead/"
            exact
            render={props => <NewReadTask {...props} {...this.state} />}
          />
          <Route
            path="/ToDo/"
            exact
            render={props => <ToDoList {...props} {...this.state} />}
          />
          <Route
            path="/ToDo/:task"
            exact
            render={props => <DoTask {...props} {...this.state} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
