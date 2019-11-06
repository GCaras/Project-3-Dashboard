import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NewTaskMenu.css"


class NewTaskMenu extends Component {
    render() {
        return(
            <div>
                <section className="newButtonContainer">
                    <Link to="/NewToDo/">
                        <div className="boxImage">New Do</div>
                    </Link>
                    <Link to="/NewToRead/">
                        <div className="boxImage">New Read</div>
                    </Link>
                    {/* <Link to="/NewToWatch/">
                        <div className="boxImage">New Watch</div>
                    </Link> */}
                </section>
            </div>
        )
    }
}

export default NewTaskMenu