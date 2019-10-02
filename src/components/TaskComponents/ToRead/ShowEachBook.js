import React from 'react'

const bookStyles = {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    width: "350px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
}

const ShowEachBook = ({ choice, bookInfo }) => (
            <div style={bookStyles}>
                {bookInfo.volumeInfo.title}
                <img alt="book from a search" src={bookInfo.volumeInfo.imageLinks.thumbnail} onClick={choice} />
                {/* <p>{bookInfo.searchInfo.textSnippet}</p> */}
            </div>
        )


export default ShowEachBook