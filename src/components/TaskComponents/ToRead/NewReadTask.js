import React, { Component } from 'react';
import SearchField from "react-search-field";
import ShowEachBook from './ShowEachBook';
import styled from 'styled-components';
let Datetime = require('react-datetime');


const DoTaskContainer = styled.article`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NewDoTaskForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:  rgba( 0,0,0,0.6);
    border: solid 2px #FFFF9D;
    color: white;
    margin-top: 125px;
    padding: 10px;
    width: 80vw;
`

const FormHeader = styled.h1`
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px black;
`

const NewDoLabel = styled.label`
    color: #FFFF9D;
    font-size: 20px;
    margin: 20px;
    text-shadow: 2px 2px black;
`

const NewDoButton = styled.div`
    align-items: center;
    background-color: #2F4562;
    border: 1px solid #FFFF9D;
    color: white;
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 5px;
    text-shadow: 2px 2px black;
    text-align: center;
    width: 100px;
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
            <div>
                <DoTaskContainer>
                    <NewDoTaskForm>
                        <FormHeader>Search For Your Book</FormHeader>
                        <NewDoLabel>Pick a date:</NewDoLabel>
                        <Datetime dateFormat={true} onChange={(evt)=> this.onDateChange(evt)} />
                        <NewDoLabel>Search books:</NewDoLabel>
                        <SearchField 
                        placeholder="Search"
                        onChange={(value, evt) => this.onSearchChange(value, evt)}
                        onEnter={(value, evt) => this.onEnter(value, evt)}
                        />
                        {listOfBooks}
                        <NewDoLabel>Notes:</NewDoLabel>
                        <input onChange={(evt) => this.onInputChange(evt)} />
                        <NewDoButton style={buttonStyles} onClick={() => this.submitAction()}>Submit</NewDoButton>
                    </NewDoTaskForm>
                </DoTaskContainer>
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