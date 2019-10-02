import React, { Component } from 'react';
import SearchField from "react-search-field";
import ShowEachBook from './ShowEachBook';
import styled from 'styled-components';
let Datetime = require('react-datetime');


const StyledHeader = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
 padding: 20px;
  justify-content: space-around;
  color: white;
`

const StyledSearch = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
 padding: 20px;
  justify-content: space-around;
`



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
           searchResponse: [this.state.searchResponse.find((value) => value.volumeInfo.title === choice)]
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
            return <ShowEachBook bookInfo={el} choice={(evt) => this.selectOne(evt.target.parentNode.innerText)}  />
        })
        var date = new Date();
        return (
            <div>
                <StyledHeader>Search For Your Book Title</StyledHeader>  
                <Datetime dateFormat={true} onChange={(evt)=> console.log(evt._d)} />
               
  <StyledSearch>
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                {listOfBooks}
                </StyledSearch>
            </div>
        )
    }
}