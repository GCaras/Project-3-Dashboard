import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledToWatchImage = styled.img`
    height: auto;
    width: 200px;
`

class ToWatchList extends Component {
    render() {
        const ToWatchTaskList = this.props.toWatch.map((watchTask, i) =>(
            <Link to={`/ToWatch/${watchTask.taskName}`} key={i}>
                <section>
                    <StyledToWatchImage src={watchTask.image} alt={watchTask.taskName} />
                    <h2>{watchTask.taskName}</h2>
                    <li>{watchTask.dueDate}</li>
                    <li>{watchTask.url}</li>
                </section>
            </Link>
        ));
        return(
            <div>
                <article>{ToWatchTaskList}</article>
            </div>
        )
    }
}

export default ToWatchList