import React from 'react'

const filmStyles = {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    width: "350px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
}

const filmThumbnail = {
    height: "250px",
    width: "auto"
}

const ShowEachFilm = ({ choice, filmInfo }) => (
            <div style={filmStyles} onClick={choice}>
                <h2>{filmInfo.Title}</h2>
                <img src={filmInfo.Poster} style={filmThumbnail} />
                {/* {bookInfo.volumeInfo.title} */}
                {/* <img alt="book from a search" src={bookInfo.volumeInfo.imageLinks.thumbnail} /> */}
                {/* <p>{bookInfo.searchInfo.textSnippet}</p> */}
            </div>
        )


export default ShowEachFilm