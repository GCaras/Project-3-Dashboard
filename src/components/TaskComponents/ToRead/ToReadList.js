import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledToReadImage = styled.img`
    height: auto;
    width: 200px;
`

class ToReadList extends Component {
    render() {
        const ToReadTaskList = this.props.toRead.map((readTask, i) =>(
            <Link to={`/ToRead/${readTask.taskName}`} key={i}>
                <section>
                    <StyledToReadImage src={readTask.image} alt={readTask.taskName} />
                    <h2>{readTask.taskName}</h2>
                    <li>{readTask.dueDate}</li>
                    <li>{readTask.url}</li>
                </section>
            </Link>
        ));
        return(
            <div>
                <article>{ToReadTaskList}</article>
            </div>
        )
    }
}

export default ToReadList