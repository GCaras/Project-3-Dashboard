import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

const taskURL = "https://todolist-sei32.herokuapp.com/todo/id/5d939f2913d757001761ff39";

class ToDoTask extends Component {
    constructor(props){
        super(props)
        this.state = {
          doTask: {}
        }
        this.deleteDoTask = this.deleteDoTask.bind(this)
        this.fetchDoTask = this.fetchDoTask.bind(this)
    }

    componentDidMount() {
        this.fetchDoTask()
    }
    
    fetchDoTask() {
        fetch(taskURL + this.props.match.params.id)
          .then( response => response.json()
          .then( (parsedJson) => {
            this.setState({
              doTask: parsedJson
            })
        }))
    }

    deleteDoTask() {
        fetch(taskURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "https://todolist-sei32.herokuapp.com/"
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

export default ToDoTask