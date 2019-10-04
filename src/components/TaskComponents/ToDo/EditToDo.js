import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const url = "https://todolist-sei32.herokuapp.com/";

export default class EditPokeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            due: null,
            url: '',
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.updateCard = this.updateCard.bind(this)
    }

    handleValueChange(evt) {
        const due = evt.target.due;
        const value = evt.target.value;
        this.setState({
            [description]: value
        })
    }

    updateTask() {
        fetch(url + this.props.match.params._id, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Host": "kanto-unown-01999.herokuapp.com",
                "Connection": "keep-alive"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        // this.props.location.state.fetchPokeCard()
        //the line above is an attempt to make our pokecard re-fetch 
        //it's pokecard
    }

    render() {
        return (
            <div>
                <article>
                    <header>Update Task</header>
                    <form>
                    <input 
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleValueChange}
                        />
                        <input 
                        name="due"
                        type="date"
                        placeholder="Due"
                        value={this.state.due}
                        onChange={this.handleValueChange}
                        />
                        <input 
                        name="url"
                        type="text"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleValueChange}
                        />
                        <Link to={`/`}>
                            <button onClick={this.updateTask}>
                                Submit
                            </button>
                        </Link>
                    </form>
                </article>    
            </div>
        )
    }
}