import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

const taskURL = "https://todolist-sei32.herokuapp.com";



class ToWatchTask extends Component {
    constructor(props){
        super(props)
        this.state = {
          doTask: this.props.task,
          doURL: this.props.match.url
        }
        this.deleteDoTask = this.deleteDoTask.bind(this)
        console.log(this.props.match)
    }

    deleteDoTask() {
        fetch(taskURL + this.state.doURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*"
            },
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    };
    render() {
        const toDoTask = this.state.doTask;
        return (
            <div>
                <article>
                    <StyledToDoImage src={toDoTask.image} alt={toDoTask.task}/>
                    <section>
                        <h2>{toDoTask.task}</h2>
                        <li>{toDoTask.due}</li>
                        <li>{toDoTask.url}</li>
                    </section>
                    <section>
                        <button>Edit Task</button>
                        <Link to="/">
                            <button onClick={this.deleteDoTask}>Delete Task</button>
                        </Link>
                    </section>
                </article>
            </div>
        )
    }
}

export default ToWatchTask