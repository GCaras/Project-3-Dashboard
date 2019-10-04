import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const url = "https://todolist-sei32.herokuapp.com/todo/id/";
// const url = "http://localhost:8081/todo/id/";

export default class EditTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskItem: '',
            due: null,
            url: '',
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }

    handleValueChange(field, value) {
        this.setState({
            [field]: value
        }, console.log(this.state))
    }

    updateTask() {
        // console.log(this.props.tasks[0]._id)
        fetch(url + this.props.tasks[0]._id, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
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
                    <header>Update Task</header>

                    <input 
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={evt => this.handleValueChange("taskItem", evt.target.value)}
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
                        <Link to={`/`}>
                            <button onClick={this.updateTask}>
                                Submit
                            </button>
                        </Link>

                </article>    
            </div>
        )
    }
}