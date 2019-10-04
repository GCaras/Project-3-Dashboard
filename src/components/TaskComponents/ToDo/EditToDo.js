import React, { Component } from 'react'
import {Link} from 'react-router-dom';


const url = "https://todolist-sei32.herokuapp.com";

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
        })
        console.log(this.state)
    }

    updateTask() {
        fetch(url + this.props.match.url, {
            method: "PUT",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res));
        console.log(this.state.taskItem)
    };

    render() {
        return (
            <div>
                <article>
                    <header>Update Task</header>

                    <input 
                        name="taskItem"
                        type="text"
                        placeholder="taskItem"
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