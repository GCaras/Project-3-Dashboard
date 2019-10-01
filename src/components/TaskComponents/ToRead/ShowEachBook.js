import React, { Component } from 'react'

const bookStyles = {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    width: "350px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
}
// const book = this.props.bookInfo
const ShowEachBook = ({ choice, bookInfo }) => (

    // addBook(info) {

        // console.log(info)


        // const url = 'https://todolist-sei32.herokuapp.com/toread/'
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(info)
        //   })
        //     .catch(err => console.log(err));
    // }
    // render() {
        
        // return (
            <div style={bookStyles} onClick={choice}>
                {bookInfo.volumeInfo.title}
                <img alt="book from a search" src={bookInfo.volumeInfo.imageLinks.thumbnail} />
                {/* <p>{bookInfo.searchInfo.textSnippet}</p> */}
            </div>
        )
    // }
// }

export default ShowEachBook