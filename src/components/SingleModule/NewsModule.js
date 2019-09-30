import React, { Component } from 'react'

class NewsModule extends Component {

    render() {
        return(
            <div>
                <h1>{this.props[0].headline}</h1>
            </div>
        )
    }
}

export default NewsModule