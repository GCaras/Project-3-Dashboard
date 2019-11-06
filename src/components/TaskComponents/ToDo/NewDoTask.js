import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DoTaskContainer = styled.article`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NewDoTaskForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:  rgba( 0,0,0,0.6);
    border: solid 2px #FFFF9D;
    border-radius: 25px;
    color: white;
    margin: 125px 0px;
    padding: 10px;
    width: 300px;
    @media (max-width: 400px) {
        width: 280px;
    }
`

const FormHeader = styled.h1`
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px black;
`

const NewDoLabel = styled.label`
    color: #FFFF9D;
    font-size: 20px;
    margin: 10px;
    text-shadow: 2px 2px black;
`

const NewDoButton = styled.div`
    background-color: #2F4562;
    border: 1px solid lightslategray;
    /* box-shadow: 0px 0px 5px yellow; */
    margin: 20px;
    padding: 5px;
    text-shadow: 2px 2px black;
    text-align: center;
    width: 100px;
`

const taskURL = "https://todolist-sei32.herokuapp.com/todo/";

export default class CreateNewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskItem:'',
            due: '',
            notes: '',
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
                <DoTaskContainer>
                    <NewDoTaskForm>
                        <FormHeader>Create New Task</FormHeader>
                        <NewDoLabel>Pick a date</NewDoLabel>
                        <input 
                        name="due"
                        type="date"
                        placeholder="Due"
                        onChange={evt => this.handleValueChange("due", evt.target.value)}
                        />
                        <NewDoLabel>Task</NewDoLabel>
                        <input 
                        name="taskItem"
                        type="text"
                        placeholder="Task"
                        onChange={evt => this.handleValueChange("taskItem", evt.target.value)}
                        />
                        <NewDoLabel>Notes</NewDoLabel>
                        <input 
                        name="notes"
                        type="text"
                        placeholder="Notes"
                        onChange={evt => this.handleValueChange("url", evt.target.value)}
                        />
                        <Link to={'/'}>
                            <NewDoButton onClick={this.submitTask}>
                                Submit
                            </NewDoButton>
                        </Link>
                    </NewDoTaskForm>
                </DoTaskContainer>
            </div>
        )
    }
}
