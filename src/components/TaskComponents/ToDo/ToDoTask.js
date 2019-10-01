// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const StyledToDoImage = styled.img`
//     height: auto;
//     width: 200px;
// `

// class ToDoTask extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           doTask: {}
//         }
//         this.deleteDoTask = this.deleteDoTask.bind(this)
//         this.fetchDoTask = this.fetchDoTask.bind(this)
//     }

//     componentDidMount() {
//         this.fetchTask()
//     }
    
//     fetchDoTask() {
//         fetch(url + this.props.match.params.taskName)
//           .then( response => response.json()
//           .then( (parsedJson) => {
//             this.setState({
//               doTask: parsedJson
//             })
//         }))
//     }

//     deleteDoTask() {
//         fetch(url + this.props.match.params.taskName, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Connection": "keep-alive",
//                 "Cache-Control": "no-cache",
//                 "Accept": "*/*",
//                 "Host": "kanto-unown-01999.herokuapp.com"
//             },
//         }).then(res => console.log(res))
//         .catch(err => console.log(err));
//         this.props.fetchDoTask()
//     };
//     render() {
//         const toDoTask = this.state.doTask;
//         return (
//             <div>
//                 <article>
//                     <StyledToDoImage src={toDoTask.image} alt={toDoTask.taskName}/>
//                     <section>
//                         <h2>{toDoTask.taskName}</h2>
//                         <li>{toDoTask.dueDate}</li>
//                         <li>{toDoTask.url}</li>
//                     </section>
//                     <section>
//                         <button>Edit Task</button>
//                         <Link to="/">
//                             <button onClick={this.deleteDoTask}>Delete Task</button>
//                         </Link>
//                     </section>
//                 </article>
//             </div>
//         )
//     }
// }

// export default ToDoTask