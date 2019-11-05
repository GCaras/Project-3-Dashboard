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
    width: 300px;
`

const StyledTaskListHeader = styled.h1`
    font-size: 30px;
    text-align: center;
`

const StyledTaskListItem = styled.div`
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
                        <img alt={null} src={task.thumbnail} />
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                        <img alt={null} src={task.Poster} />
                        <p>{task.Title}</p>
                </Link>
                )
            );
            console.log(listResults)
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                            <StyledTaskListHeader>{"Task List"}</StyledTaskListHeader>
                            <section>
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
