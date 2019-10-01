import React, { Component } from 'react'
import TasksList from '../TasksList/TasksList'
import ToDoList from '../TaskComponents/ToDo/ToDoList'
import ToWatchList from '../TaskComponents/ToWatch/ToWatchList'
import ToReadList from '../TaskComponents/ToRead/ToReadList'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDo: [
        {
          taskName: "Run",
          dueDate: "10/5/2019",
          url: "https://en.wikipedia.org/wiki/Running",
          image: "https://www.pngix.com/pngfile/middle/298-2980365_run-icon-png-transparent-png.png"
        },
        {
          taskName: "Walk",
          dueDate: "10/4/2019",
          url: "https://en.wikipedia.org/wiki/Walking",
          image: "https://www.boisfranc.com/content/uploads/sites/36/2018/09/walk-png.png"
        }
      ],
      toWatch: [
        {
          taskName: "The Blacklist",
          network: "Netflix",
          dueDate: "10/5/1989",
          url: "https://www.netflix.com/title/70281312",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_Blacklist_logo.svg"
        },
        {
          taskName: "The Whitelist",
          network: "Netflix",
          dueDate: "10/5/1989",
          url: "https://www.netflix.com/title/70281312",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_Blacklist_logo.svg"
        }
      ],
      toRead: []
    }
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
            render={props => <ToWatchList {...props} {...this.state.toWatch} />}
          />
          <Route
            path="/ToRead/"
            exact
            render={props => <ToReadList {...props} {...this.state.toRead} />}
          />
        </section>
      </div>
    )
  }
}

export default App;
