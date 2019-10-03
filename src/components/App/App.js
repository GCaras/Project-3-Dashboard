
import React, { Component } from 'react'
import TaskList from '../TasksList/TasksList'
import NewTaskList from '../NewTask/NewTaskMenu'
import NewDoTask from '../TaskComponents/ToDo/NewDoTask'
import NewWatchTask from '../TaskComponents/ToWatch/NewWatchTask'
import NewReadTask from '../TaskComponents/ToRead/NewReadTask'
import ToDoList from '../TaskComponents/ToDo/ToDoList'
import ToDoTask from "../TaskComponents/ToDo/ToDoTask"
import { Route, Link } from 'react-router-dom'
import './App.css'

let Datetime = require('react-datetime')


// const taskURL = "https://todolist-sei32.herokuapp.com/";
const taskURL = "http://localhost:8081/";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      dateAndTime: Date,
    }
    this.onDateChange = this.onDateChange.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
  }

  onDateChange(evt){
    let dateBuf = new Date(evt._d)
    dateBuf = JSON.stringify(dateBuf)
    dateBuf = dateBuf.slice(0,11).concat("\"")
    console.log(dateBuf)
    
    this.setState({
        dateAndTime: dateBuf
    })
    this.fetchTasks()
  }
  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch(taskURL+"index", {
      // Must shorten by 10 characters
      method: "POST",
      body: this.state.dateAndTime
    })
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
        <Datetime dateFormat={true} onChange={(evt)=> this.onDateChange(evt)} />
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
            path="/ToWatch/"
            exact
            render={props => <ToDoList {...props} {...this.state} />}
          />
          <Route
            path="/ToWatch/id/:task"
            exact
            render={props => <ToDoTask {...props} {...this.state} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
