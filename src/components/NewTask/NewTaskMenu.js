import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NewTaskMenu.css"

class NewTaskMenu extends Component {
    render() {
        return(
            <div>
                <div className="wrapper">
                <section>
                    <Link to="/NewToDo/">
                        <div className="boxImage1">
                        <div>New Do</div>
                        </div>
                    </Link>
                    <Link to="/NewToRead/">
                    <div className="boxImage2">
                        <div>New Read</div>
                        </div>
                    </Link>
                    <Link to="/NewToWatch/">
                    <div className="boxImage3">
                        <div>New Watch</div>
                        </div>
                    </Link>
                </section>
                </div>
            </div>
        )
    }
}

export default NewTaskMenu