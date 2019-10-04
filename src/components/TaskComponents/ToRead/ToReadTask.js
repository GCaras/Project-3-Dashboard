import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToDoImage = styled.img`
    height: auto;
    width: 200px;
`

const taskUrl = "https://todolist-sei32.herokuapp.com";

class ToWatchTask extends Component {
    constructor(props){
        super(props)
        this.state = {
          readTask: [],
          readUrl: this.props.match.url
        }
        this.deleteDoTask = this.deleteDoTask.bind(this)
        this.fetchReadTask = this.fetchReadTask.bind(this)
        console.log(this.props.match)
    }

    componentDidMount() {
        this.fetchReadTask();
      }

    fetchReadTask() {
        fetch(taskUrl + this.state.readUrl, {
            method: "GET",
        })
        .then( response => response.json()
        .then( (parsedJson) => {
          this.setState({
            readTask: parsedJson[0]
          })
        }
        ))
    }

    deleteDoTask() {
        fetch(taskUrl + this.state.readUrl, {
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
        // const toReadTask = this.state.readTask;
        console.log(this.state.readTask)
        return (
            <div>
                <article>
                    <StyledToDoImage src={this.state.readTask.thumbnail} alt={this.state.readTasktitle}/>
                    <section>
                        <h2>{this.state.readTasktitle}</h2>
                        <li>{this.state.readTaskdue}</li>
                    </section>
                    <section>
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