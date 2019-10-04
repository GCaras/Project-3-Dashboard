
import React, { Component } from 'react'
import TaskList from '../TasksList/TasksList'
import NewTaskMenu from '../NewTask/NewTaskMenu'
import NewDoTask from '../TaskComponents/ToDo/NewDoTask'
import NewWatchTask from '../TaskComponents/ToWatch/NewWatchTask'
import NewReadTask from '../TaskComponents/ToRead/NewReadTask'
import ToDoTask from "../TaskComponents/ToDo/ToDoTask"
import ToReadTask from "../TaskComponents/ToRead/ToReadTask"
import ToWatchTask from "../TaskComponents/ToWatch/ToWatchTask"
import { Route, Link } from 'react-router-dom'
import './App.css'

let Datetime = require('react-datetime')


const taskURL = "https://todolist-sei32.herokuapp.com/";
// const taskURL = "http://localhost:8081/";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      dateAndTime: null,
    }
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(evt){
    let dateBuf = new Date(evt._d)
    dateBuf = JSON.stringify(dateBuf)
    dateBuf = dateBuf.slice(1,11)
    
    this.setState({
        dateAndTime: dateBuf
    })
      
    fetch(taskURL+"index/"+this.state.dateAndTime, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then( response => response.json()
      .then( (parsedJson) => {
        this.setState({ tasks: parsedJson })
      }))
  }

  

  render () {
    return (
      <div>
        <header>
        
        <Link to="/">
          <h1 className="logo">YouDue<span role="img">	&#x270F;&#xFE0F; </span></h1>
        </Link>
        <h2 className="motto"> Getting things done, <i className="onTime">on time.</i></h2>
        <section>
          <p className="pickDate blinking"> Pick a Date</p>
          <input className="dateTime" type="date" dateFormat={true} onChange={(evt)=> this.onDateChange(evt)} />
        </section>
        <Link to="/NewTask/">
          <h4 className="createTask ">Create New Task</h4>
        </Link>
        </header>
        <section>
          <Route 
            path="/"
            exact
            render={props => <TaskList {...props} {...this.state} />}
          />
          <Route
            path="/NewTask/"
            exact
            render={props => <NewTaskMenu {...props} {...this.state} />}
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
            path="/todo/id/:id"
            exact
            render={props => <ToDoTask {...props} {...this.state} />}
          />
          <Route
            path="/toread/id/:id"
            exact
            render={props => <ToReadTask {...props} {...this.state} />}
          />
          <Route
            path="/towatch/id/:id"
            exact
            render={props => <ToWatchTask {...props} {...this.state} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
