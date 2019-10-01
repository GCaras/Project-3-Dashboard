import React, { Component } from 'react';
import SearchField from "react-search-field";
import ShowEachBook from './ShowEachBook';
let Datetime = require('react-datetime');



export default class ToReadList extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null,
            searchResponse: []
        }
        this.onChange=this.onChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
        this.afterSearch = this.afterSearch.bind(this)
    
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

    onEnter(value, evt) {
        
        const APIkey = '&key=AIzaSyDlLQvTxUGYnqHAfApV_W4iXcif3xYDdSg'
        const GoogleURL = "https://www.googleapis.com/books/v1/volumes?q=+intitle:";
        const url = `${GoogleURL}${this.state.searchText}${APIkey}`;
       
        fetch(url)
        .then(res => res.json())
        // .then(res => {
        //    this.afterSearch(res.items)
        // })
        .then(response => {
            let resArray = []
            for(let i = 0; i < 10; i++){
                resArray.push(response.items[i])
            }
            this.afterSearch(resArray)

        })
        .catch(err => {
          console.error(err);
        });
    }

    render() {
       const listOfBooks = this.state.searchResponse.map(el => {
            return <ShowEachBook bookInfo={el}  />
        })
        var date = new Date();
        return (
            <div>
                <h1>Search For Your Book Title</h1>  
                <Datetime dateFormat={true} onChange={(evt)=> console.log(evt._d)} />
  
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                {listOfBooks}
            </div>
        )
    }
}