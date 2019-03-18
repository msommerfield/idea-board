import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the ideas App</h1>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default HomePage 