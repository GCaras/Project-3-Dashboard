import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10 auto;
`

const StyledModuleListItem = styled.article`
    background-color: white;
    border: solid 4px aqua;
    border-radius: 25px;
    box-shadow: 5px 5px 5px darkslategray;
    color: white;
    height: 100%;
    margin: 5px;
    padding: 5px;
    width: 275px;
`

const StyledTaskListHeader = styled.h1`
    font-size: 30px;
    text-align: center;
`
var indexArray = [];

console.log(indexArray)

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.ToDoTaskList = this.ToDoTaskList.bind(this)
        this.ToWatchTaskList = this.ToWatchTaskList.bind(this)
        this.ToReadTaskList = this.ToReadTaskList.bind(this)
    }

    componentDidMount() {
        this.ToDoTaskList();
        this.ToWatchTaskList();
        this.ToReadTaskList();
    }

    ToDoTaskList() {this.props.toDo.map((doTask) =>(
        indexArray.push(doTask)
        ))
    }

    ToWatchTaskList() {
        this.props.toWatch.map((watchTask) =>(
        indexArray.push(watchTask)
        ))
    }

    ToReadTaskList() {
        this.props.toRead.map((readTask) =>(
        indexArray.push(readTask)
        ))
    }

    render() {
        const TaskList = indexArray.map((task, i) => (
            <Link to={`/todo/${task.task}`} key={i}>
                <li>{task}</li>
            </Link>
        ))
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                        <Link to="/ToDo/">
                            <StyledTaskListHeader>{"To-Do List"}</StyledTaskListHeader>
                            <section>
                                <ul>{TaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                </StyledModuleList>
            </div>
        )
    }
}

export default TaskList