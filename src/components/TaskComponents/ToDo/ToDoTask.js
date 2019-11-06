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
    justify-content: space-evenly;
    margin: 20px;
    padding: 20px 20px;
    text-shadow: 2px 2px white;
    width: 350px;
    @media (max-width: 400px){
        width: 260px;
        height: 260px;
        margin: 20px 0px;
    }
`

const TaskItemHeader = styled.h2`
    font-size: 26px;
    margin: 5px 0px;
    text-align: center;
    text-shadow: 1px 1px white;
    @media (max-width: 400px){
        font-size: 24px;
    }
`

const TaskItemDetails = styled.p`
    color: black;
    font-size: 20px;
    margin: 5px 0px;
    text-align: center;
    text-shadow: 1px 1px white;
`

const NewDoButton = styled.div`
    background-color: #172231;
    border: 3px solid #2E4562;
    /* box-shadow: 0px 0px 5px yellow; */
    margin: 20px;
    padding: 5px;
    text-shadow: 2px 2px black;
    text-align: center;
    width: 100px;
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
        this.fetchDoTask = this.fetchDoTask.bind(this)
    }

    componentDidMount() {
        this.fetchDoTask();
      }

    fetchDoTask() {
        fetch(taskURL + this.state.doURL, {
            method: "GET",
        })
        .then( response => response.json()
        .then( (parsedJson) => {
          this.setState({
            doTask: parsedJson[0]
          })
        }
        ))
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
        this.props.location.push("/")
    };
    render() {
        const toDoTask = this.state.doTask;
        return (
            <div>
                <StyledReadArticle>
                    <section>
                        <TaskItemHeader>{toDoTask.taskItem}</TaskItemHeader>
                        <TaskItemDetails>{toDoTask.url}</TaskItemDetails>
                    </section>
                    <section>
                        <Link to="/">
                            <NewDoButton onClick={this.deleteDoTask}>Delete Task</NewDoButton>
                        </Link>
                    </section>
                </StyledReadArticle>
            </div>
        )
    }
}

export default ToDoTask