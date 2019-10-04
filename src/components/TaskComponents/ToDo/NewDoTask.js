import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const pokeURL = "https://kanto-unown-01999.herokuapp.com/";
//We should have the url in App.js and this url come from
//the same source

export default class CreateNewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description:'',
            due: '',
            url: '',
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    handleValueChange(evt) {
        const description = evt.target.description;
        // const value = evt.target.value;
        this.setState({
            [description]: evt.target.value
        })
    }

    submitTask() {
        fetch(pokeURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "kanto-unown-01999.herokuapp.com"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
}

    render() {
        return (
            <div>
                <article>
                    <h1>Create New Pokémon Card</h1>
                    <form>
                        <input 
                        name="description"
                        type="text"
                        placeholder="Description"
                        // value={this.state.description}
                        onChange={this.handleValueChange}
                        />
                        <input 
                        name="due"
                        type="date"
                        placeholder="Due"
                        // value={this.state.due}
                        onChange={this.handleValueChange}
                        />
                        <input 
                        name="url"
                        type="text"
                        placeholder="URL"
                        // value={this.state.url}
                        onChange={this.handleValueChange}
                        />
                        <Link to={'/'}>
                            <button onClick={this.submitTask}>
                                Submit Card
                            </button>
                        </Link>
                    </form>
                </article>
            </div>
        )
    }
}
