import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewTaskMenu extends Component {
    render() {
        return(
            <div>
                <section>
                    <Link to="/NewToDo/">
                        <div>New Do</div>
                    </Link>
                    <Link to="/NewToRead/">
                        <div>New Read</div>
                    </Link>
                    <Link to="/NewToWatch/">
                        <div>New Watch</div>
                    </Link>
                </section>
            </div>
        )
    }
}

export default NewTaskMenu