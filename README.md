# Project-3-Dashboard
Front-end dashboard for Project 3

#Link

http://youdue.surge.sh/

## Description
This is the Git Repository for the YouDue website. The websites allow users to choose to create a task. There are three task options, To-Do, To-Read, and To-Watch. Each task has it's own specific subcategory that is connected to a back-end server. For example, when searching for a To-watch task, you can search for specific movies and then save them to the to-do list. 


## Brief Example

``<Route 
            path="/"
            exact
            render={() => <TaskList taskState={this.state} />}
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
    ``

This is a code snippet of the routes that were used to navigate throughout the page so that users will be connected to the multiple facets of the site.


## List of Features

MVP

- Create a custom to-do list based on selected items on each respective page (ex: To-Read: Harry Potter)

- Select a date and a time that allows each user to know the date that they want each goal to be done by.

- Allows users to create a new task for new task that they have to do. 

Extra

- Get the main page to load more than one to-do without erroring out.




## Technologies Used

- Express
- React 
- React Router 
- NPM 
- Moment
- Styled Components
- React Search Field

## Getting Started

To use this app:
- Fork, clone, and cd into the file after cloning. 
- Install Dependencies: npm i && npm start

## Contribution Guidelines

Main Repo: https://github.com/GCaras/Project-3-Dashboard/tree/master

Issue Link: https://github.com/GCaras/Project-3-Dashboard/issues
