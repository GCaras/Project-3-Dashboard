import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const taskURL = "https://todolist-sei32.herokuapp.com/todo/";

export default class CreateNewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description:'',
            due: '',
            url: '',
            type: 'todo'
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    handleValueChange(field, value) {
        // const description = evt.target.description;
        // const value = evt.target.value;
        this.setState({
            [field]: value

        })
    }

    submitTask() {
        fetch(taskURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
}

    render() {
        return (
            <div>
                <article>
                    <h1>Create New Task</h1>
                    <form>
                        <input 
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={evt => this.handleValueChange("description", evt.target.value)}
                        />
                        <input 
                        name="due"
                        type="date"
                        placeholder="Due"
                        onChange={evt => this.handleValueChange("due", evt.target.value)}
                        />
                        <input 
                        name="url"
                        type="text"
                        placeholder="URL"
                        onChange={evt => this.handleValueChange("url", evt.target.value)}
                        />
                        <Link to={'/'}>
                            <button onClick={this.submitTask}>
                                Submit Card
                            </button>
                        </Link>
                    </form>
                </article>
            </div>
        )
    }
}
