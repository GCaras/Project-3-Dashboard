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
    height: 275px;
    margin: 5px;
    padding: 5px;
    width: 275px;
`

const StyledTaskListHeader = styled.h1`
    font-size: 30px;
    text-align: center;
`


class ModuleList extends Component {
    render() {
        const ToDoTaskList = this.props.toDo.map((doTask, i) =>(
            <li key={i}>{doTask.dueDate} - {doTask.taskName}</li>
        ));
        const ToWatchTaskList = this.props.toWatch.map((watchTask, i) =>(
            <li key={i}>{watchTask.dueDate} - {watchTask.taskName}</li>
        ));
        const ToReadTaskList = this.props.toRead.map((readTask, i) =>(
            <li key={i}>{readTask.dueDate} - {readTask.taskName}</li>
        ));
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                        <Link to="/ToDo/">
                            <StyledTaskListHeader>{"To-Do List"}</StyledTaskListHeader>
                            <section>
                                <ul>{ToDoTaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                    <StyledModuleListItem>
                        <Link to="/ToWatch/">
                        <StyledTaskListHeader>{"To-Watch List"}</StyledTaskListHeader>
                            <section>
                                <ul>{ToWatchTaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                    <StyledModuleListItem>
                        <Link to="/ToRead/">
                            <StyledTaskListHeader>{"To-Read List"}</StyledTaskListHeader>
                            <section>
                                <ul>{ToReadTaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                </StyledModuleList>
                
            </div>
        )
    }
}

export default ModuleList