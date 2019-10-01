import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 10 auto;
    justify-content: center;
    align-items: center;
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


class ModuleList extends Component {
    render() {
        const ToDoTaskList = this.props.toDo.map((doTask, i) =>(
                <li key={i}>{doTask.taskName}</li>
        ));
        const ToWatchTaskList = this.props.toWatch.map((watchTask, i) =>(
            <li key={i}>{watchTask.taskName}</li>
        ))
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                        <Link to="/ToDo/">
                            <h1>{"To-Do List"}</h1>
                            <section>
                                <ul>{ToDoTaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                    <StyledModuleListItem>
                        <Link to="/ToWatch/">
                        <h1>{"To-Watch List"}</h1>
                            <section>
                                <ul>{ToWatchTaskList}</ul>
                            </section>
                        </Link>
                    </StyledModuleListItem>
                    <StyledModuleListItem>
                    </StyledModuleListItem>
                </StyledModuleList>
                
            </div>
        )
    }
}

export default ModuleList