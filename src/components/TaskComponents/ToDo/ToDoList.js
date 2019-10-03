import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

class ToDoList extends Component {
    render() {
        const tasks = this.props.tasks;
        const taskList = tasks.map((task, i) =>(
            <Link to={`${task._id}`} key={i}>
                <section>
                    <StyledToDoImage src={task.image} alt={task.taskName} />
                    <h2>{task.task}</h2>
                    <li>{task.due}</li>   
                    <li>{task.url}</li>
                </section>
            </Link>
        ));
        return(
            <div>
                <article>{taskList}</article>
            </div>
        )
    }
}

export default ToDoList