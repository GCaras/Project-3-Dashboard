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

class TaskList extends Component {

    render() {
        const TaskList = this.props.tasks.map((task, i) => (
            <Link to={`${task.type}/id/${task.task}`} key={i}>
                <li>{task}</li>
            </Link>
        ))
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                            <StyledTaskListHeader>{"To-Do List"}</StyledTaskListHeader>
                            <section>
                                <ul>{TaskList}</ul>
                            </section>
                    </StyledModuleListItem>
                </StyledModuleList>
            </div>
        )
    }
}

export default TaskList