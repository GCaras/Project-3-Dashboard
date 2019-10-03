import React, { Component } from 'react';
import SearchField from "react-search-field";
import ShowEachFilm from './ShowEachFilm';
let Datetime = require('react-datetime');

let newObjPost = {};

export default class ToWatchList extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null,
            searchResponse: [],
            descriptionInput: '',
            dateAndTime: Date
        }
        this.onSearchChange=this.onSearchChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
        this.afterSearch = this.afterSearch.bind(this)
        this.selectOne = this.selectOne.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.submitAction = this.submitAction.bind(this)
        this.buildObject = this.buildObject.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
    
    }
    onSearchChange(value, evt) {
        this.setState({
            searchText: value
        })
    }
    onInputChange(evt) {
        console.log(evt.target.value)
        this.setState({
            descriptionInput: evt.target.value
        })
    }
    afterSearch(res) {
        this.setState({
            searchResponse: res
        }) 
    }

    // Narrows search to one choice to add to the list
    selectOne(choice){
       this.setState({
           searchResponse: [this.state.searchResponse.find((value) => value.Title === choice)]
       }) 
    }

    onEnter() {
        
        const APIkey = '?apikey=cd212def&s='
        const movieURL = "http://www.omdbapi.com/";
        const url = `${movieURL}${APIkey}${this.state.searchText}`;
       
        fetch(url)
        .then(res => res.json())
        .then(res => this.afterSearch(res.Search))
        .catch(err => {
          console.error(err);
        });
    }

    buildObject() {
        newObjPost.Title = this.state.searchResponse[0].Title
        newObjPost.Poster = this.state.searchResponse[0].Poster
        newObjPost.description = this.state.descriptionInput
        newObjPost.due = this.state.dateAndTime
        newObjPost.type = 'towatch'
        console.log(newObjPost)
    }

    onDateChange(evt){
        this.setState({
            dateAndTime: evt._d
        })
    }

    submitAction() {
        this.buildObject()
        fetch("https://todolist-sei32.herokuapp.com/towatch/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(newObjPost),
            headers: {
                'Content-Type': 'application/json',
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "https://todolist-sei32.herokuapp.com/"
            },
            
        }).then(res => console.log(res))
    }

    render() {
       const listOfFilms = this.state.searchResponse.map(el => {
            return <ShowEachFilm filmInfo={el} choice={(evt) => this.selectOne(evt.target.parentNode.innerText)} />
        })
        var date = new Date();
        return (
            <div style={newTaskStyles}>
                <h1>Search For A Movie Title</h1>  
                <Datetime dateFormat={true} onChange={(evt)=> this.onDateChange(evt)} />
  
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onSearchChange(value, evt)}
                onEnter={() => this.onEnter()}
                />
                {listOfFilms}
                <input onChange={(evt) => this.onInputChange(evt)} />
                <button style={buttonStyles} onClick={() => this.submitAction()}>Submit</button>
            </div>
        )
    }
}

const buttonStyles = {
    height: "50px",
    width: "200px",
    margin: "30px"
}

const newTaskStyles = {
    margin: "0 auto",
    height: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
}