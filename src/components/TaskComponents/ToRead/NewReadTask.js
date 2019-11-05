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

let newObjPost = {};

export default class NewReadTask extends Component {
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
           searchResponse: [this.state.searchResponse.find((value) => value.volumeInfo.title === choice)]
       }) 
    }

    onEnter(value, evt) {
        
        const APIkey = '&key=AIzaSyD5tsK6CR7eAgHDP8UYHk7CPIBevw6sRUk'
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
        newObjPost.title = this.state.searchResponse[0].volumeInfo.title
        newObjPost.thumbnail = this.state.searchResponse[0].volumeInfo.imageLinks.thumbnail
        newObjPost.description = this.state.descriptionInput
        newObjPost.due = this.state.dateAndTime
        newObjPost.type = 'toread'
        console.log(newObjPost)
    }

    onDateChange(evt){
        this.setState({
            dateAndTime: evt._d
        })
    }

    submitAction() {
        this.buildObject()
        fetch("https://todolist-sei32.herokuapp.com/toread/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(newObjPost),
            headers: {
                'Content-Type': 'application/json',
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
                "Host": "https://todolist-sei32.herokuapp.com/"
            },
            
        }).then(res => console.log(res))
    }

    render() {

        console.log(this.state.searchResponse)
        
       const listOfBooks = this.state.searchResponse.map(el => {
            return <ShowEachBook bookInfo={el} choice={(evt) => this.selectOne(evt.target.parentNode.innerText)}  />
        })
        var date = new Date();
        return (
            <div style={newTaskStyles}>
                <StyledHeader>Search For Your Book Title</StyledHeader>  
                <Datetime dateFormat={true} onChange={(evt)=> this.onDateChange(evt)} />
               
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