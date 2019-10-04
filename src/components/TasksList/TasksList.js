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
    margin: 20px;
    margin-top: 125px;
    width: 275px;
    margin-left: 450px;
    padding: 50px;
    position: absolute;
`

const StyledTaskListHeader = styled.h1`
    font-size: 30px;
    text-align: center;
`
let list1

class TaskList extends Component {

    render() {

        try {
            list1 = this.props.taskState.tasks
            return  list1.map((task, i) => (
                    <Link to={`${task.type}/id/${task._id}`} key={i}>
                        <img alt={i} src={task.Poster} />
                        <li>{task.Title}</li>
                        {/* <img alt={i} src={task.volumeInfo.images.thumbnail} />
                        <li>{task.volumeInfo.title}</li>
                        <li>{task.description}</li> */}

                    </Link>
                ))

        }
        catch(err){
            console.log("not yet")
        }
        
        // })
        // console.log(TaskListItems)
        

        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem>
                            <StyledTaskListHeader>{"To-Do List"}</StyledTaskListHeader>
                            <section>
                                {/* <ul>{TaskListItems}</ul> */}
                            </section>
                    </StyledModuleListItem>
                </StyledModuleList>
            </div>
        )
    }
}

export default TaskList