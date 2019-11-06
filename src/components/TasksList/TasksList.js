import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

const StyledTask = styled.section`
    background: rgb(255,255,157);
    background: linear-gradient(135deg, 
                rgba(255,255,157,1) 0%, 
                rgba(153,153,65,1) 74%, 
                rgba(117,117,29,1) 94%, 
                rgba(94,94,11,1) 100%);
    background-size: cover;
    border: solid 2px black;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
    display: flex;
    height: 300px;
    color: black;
    margin: 20px;
    padding: 40px 20px;
    text-shadow: 2px 2px black;
    width: 350px;
`

const StyledTaskListHeader = styled.h1`
    color: white;
    font-size: 36px;
    margin: 5px 0px;
    text-align: center;
    text-shadow: 2px 2px black;
`

const TaskListItemContainer = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
`

const StyledTaskListItem = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    justify-content: center;
    margin: 5px 0px;
    text-align: center;
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

const StyledImage = styled.img`
    border: 3px solid black;
`


class TaskList extends Component {

    render() {
        const listResults = this.props.taskState.tasks
        const doList = listResults.map((task, i) => (
            <Link to={`${task.type}/id/${task._id}`} key={i}>
                <StyledTask>
                    {task.taskItem ? (<TaskItemHeader>{task.taskItem}</TaskItemHeader>): (null)}

                    {task.url ? (<TaskItemDetails>{task.url}</TaskItemDetails>): (null)}

                    {task.thumbnail ? (<StyledImage alt={null} src={task.thumbnail} />): (null)}

                    {task.title ? (<TaskItemHeader>{task.title}</TaskItemHeader>): (null)}

                    {task.description ? (<TaskItemDetails>{task.description}</TaskItemDetails>): (null)}

                    {task.Poster ? (<StyledImage alt={null} src={task.Poster} />): (null)}

                    {task.title ? (<TaskItemHeader>{task.Title}</TaskItemHeader>): (null)}
                </StyledTask>
            </Link>
            )
        );
        console.log(listResults)
        return(
            <div>
                <StyledModuleList>
                    <StyledTaskListHeader>{"Task List"}</StyledTaskListHeader>
                    <TaskListItemContainer>
                        <StyledTaskListItem>{doList}</StyledTaskListItem>
                    </TaskListItemContainer>
                </StyledModuleList>
            </div>
        )
    }
}

export default TaskList
