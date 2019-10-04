import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10 auto;
`

const StyledModuleListItem = styled.article`
    background-color:  rgba( 0,0,0,0.6);
    border: solid 4px black;
    border-radius: 25px;
    box-shadow: 5px 5px 5px yellow;
    color: white;
    margin-top: 125px;
    width: 400px;
`

const StyledTaskListHeader = styled.h1`
    font-size: 30px;
    text-align: center;
`

const StyledTaskListItem = styled.ul`
    color: white;
    font-size: 30px;
    text-align: center;
`



class TaskList extends Component {

    render() {
        const listResults = this.props.taskState.tasks
            const doList = listResults.map((task, i) => (
                <Link to={`${task.type}/id/${task._id}`} key={i}>
                        <p>{task.taskItem}</p>
                </Link>
                )
            );
            const moviesList = listResults.map((task, i) => (
                    <Link to={`${task.type}/id/${task._id}`} key={i}>
                        <img alt={i} src={task.Poster} />
                        <p>{task.Title}</p>

                    </Link>
                )
            );
            const readList = listResults.map((task, i) => (
                <Link to={`${task.type}/id/${task._id}`} key={i}>
                        <img alt={`${task.title}-image`} src={task.thumbnail} />
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                </Link>
                )
            );
            console.log(listResults)
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                            <StyledTaskListHeader>{"To-Do List"}</StyledTaskListHeader>
                            <section>
                                <article>
                                    <StyledTaskListItem>{moviesList}</StyledTaskListItem>
                                </article>
                                <article>
                                    <StyledTaskListItem>{readList}</StyledTaskListItem>
                                </article>
                                <article>
                                    <StyledTaskListItem>{doList}</StyledTaskListItem>
                                </article>
                            </section>
                    </StyledModuleListItem>
                </StyledModuleList>
            </div>
        )
    }
}

export default TaskList