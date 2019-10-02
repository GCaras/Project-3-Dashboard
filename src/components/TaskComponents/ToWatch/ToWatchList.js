import React, { Component } from 'react';
import SearchField from "react-search-field";
import ShowEachFilm from './ShowEachFilm';
let Datetime = require('react-datetime');



export default class ToWatchList extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null,
            searchResponse: []
        }
        this.onChange=this.onChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
        this.afterSearch = this.afterSearch.bind(this)
        this.selectOne = this.selectOne.bind(this)
    
    }
    onChange(value, evt) {
        this.setState({
            searchText: value
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

    onEnter(value, evt) {
        
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

    render() {
       const listOfFilms = this.state.searchResponse.map(el => {
            return <ShowEachFilm filmInfo={el} choice={(evt) => this.selectOne(evt.target.parentNode.innerText)} />
        })
        var date = new Date();
        return (
            <div>
                <h1>Search For A Movie Title</h1>  
                <Datetime dateFormat={true} onChange={(evt)=> console.log(evt._d)} />
  
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                {listOfFilms}
            </div>
        )
    }
}