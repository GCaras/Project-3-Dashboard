import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledReadArticle = styled.article`
    align-items: center;
    background: rgb(255,255,157);
    background: linear-gradient(135deg, 
                rgba(255,255,157,1) 0%, 
                rgba(153,153,65,1) 78%, 
                rgba(117,117,29,1) 93%, 
                rgba(94,94,11,1) 100%);
    background-size: cover;
    border: solid 2px black;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    height: 350px;
    justify-content: center;
    margin: 20px;
    padding: 10px 20px;
    text-shadow: 2px 2px white;
    width: 350px;
`

const TaskItemHeader = styled.h2`
    font-size: 26px;
    margin: 5px 0px;
    text-align: center;
    text-shadow: 1px 1px white;
`

const TaskItemDetails = styled.p`
    color: black;
    font-size: 20px;
    margin: 5px 0px;
    text-align: center;
    text-shadow: 1px 1px white;
`

const StyledToDoImage = styled.img`
    border: 3px solid black;
    height: auto;
    max-width: 200px;
`

const NewReadButton = styled.div`
    background-color: #172231;
    border: 3px solid #2E4562;
    /* box-shadow: 0px 0px 5px yellow; */
    padding: 5px;
    text-shadow: 2px 2px black;
    text-align: center;
    width: 100px;
`

const taskUrl = "https://todolist-sei32.herokuapp.com";

class ToWatchTask extends Component {
    constructor(props){
        super(props)
        this.state = {
          readTask: [],
          readUrl: this.props.match.url
        }
        this.deleteDoTask = this.deleteReadTask.bind(this)
        this.fetchReadTask = this.fetchReadTask.bind(this)
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

    deleteReadTask() {
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
                <StyledReadArticle>
                    <StyledToDoImage src={this.state.readTask.thumbnail} alt={this.state.readTask.title}/>
                    <section>
                        <TaskItemHeader>{this.state.readTask.title}</TaskItemHeader>
                        <TaskItemDetails>{this.state.readTask.description}</TaskItemDetails>
                    </section>
                    <section>
                        <Link to="/">
                            <NewReadButton onClick={this.deleteReadTask}>Delete Task</NewReadButton>
                        </Link>
                    </section>
                </StyledReadArticle>
            </div>
        )
    }
}

export default ToWatchTask