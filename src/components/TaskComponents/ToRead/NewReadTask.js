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

let abc = {};

export default class NewReadTask extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null,
            searchResponse: [],
            input: '',
        }
        this.onSearchChange=this.onSearchChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
        this.afterSearch = this.afterSearch.bind(this)
        this.selectOne = this.selectOne.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.submitAction = this.submitAction.bind(this)
    
    }
    onSearchChange(value, evt) {
        this.setState({
            searchText: value
        })
    }
    onInputChange(evt) {
        console.log(evt.target.value)
        this.setState({
            input: evt.target.value
        })
    }
    afterSearch(res) {
        this.setState({
            searchResponse: res
        }, console.log(this.state.searchResponse)) 
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
    buildObject() {
        abc.description = this.state.input;
        // abc.thumbnail = this.state.searchResponse[0].thumbnail;
        // abc.
    }

    submitAction() {
        fetch("http://localhost:8081/toread/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            },
            
        }).then(res => console.log(res))
    }

    render() {
        
       const listOfBooks = this.state.searchResponse.map(el => {
            return <ShowEachBook bookInfo={el} choice={(evt) => this.selectOne(evt.target.parentNode.innerText)}  />
        })
        var date = new Date();
        return (
            <div style={newTaskStyles}>
                <StyledHeader>Search For Your Book Title</StyledHeader>  
                <Datetime dateFormat={true} onChange={(evt)=> console.log(evt._d)} />
               
                <StyledSearch>
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onSearchChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                {listOfBooks}
                </StyledSearch>
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