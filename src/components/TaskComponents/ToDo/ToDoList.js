import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

class ToDoList extends Component {
    render() {
        const ToDoTaskList = this.props.map((doTask, i) =>(
            <Link to={`/ToDo/${doTask.taskName}`} key={i}>
                <section>
                    <StyledToDoImage src={doTask.image} alt={doTask.taskName} />
                    <h2>{doTask.task}</h2>
                    <li>{doTask.due}</li>   
                    <li>{doTask.url}</li>
                </section>
            </Link>
        ));
        return(
            <div>
                <article>{ToDoTaskList}</article>
            </div>
        )
    }
}

export default ToDoList