import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

const taskURL = "https://todolist-sei32.herokuapp.com";

class ToDoTask extends Component {
    constructor(props){
        super(props)
        this.state = {
          doTask: {},
          doURL: this.props.match.url
        }
        this.deleteDoTask = this.deleteDoTask.bind(this)
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
                    <section>
                        <h2>{toDoTask.taskItem}</h2>
                    </section>
                    <section>
                        <Link to="/todo/edit/:id">
                        <button>Edit Task</button>
                        </Link>
                        <Link to="/">
                            <button onClick={this.deleteDoTask}>Delete Task</button>
                        </Link>
                    </section>
                </article>
            </div>
        )
    }
}

export default ToDoTask