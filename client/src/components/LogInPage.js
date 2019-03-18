import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
    state = {
        users: []
    }

componentDidMount = () => {
    this.getAllUsers()
}

    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({users: res.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Log in Page</h1>
                <Link to="/">Go Back Home</Link>

                <h2>Select a user to log in</h2>
                {
                    this.state.users.map((user) => {
                        return(
                            <Link  
                                to={`/user/${user._id}`}
                                key={user._id}
                            >
                            {user.userName}
                            </Link>)
                    })
                }
            </div>
        )
    }
}

export default LogInPage