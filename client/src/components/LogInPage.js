import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
    state = {
        users: [],
        user: {},
        redirectToHome: false,
        createdUser: {}
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })
    }

    createUser = () => {
        axios.post('/api/users', { user: this.state.user })
            .then((res) => {
                this.setState({ redirectToHome: true, createdUser: res.data })
            })
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    handleSignUp = (e) => {
        e.preventDefault()
        this.createUser()
    }


    render() {
        if(this.state.redirectToHome === true) {
            return(<Redirect to={`/user/${this.state.createdUser._id}`} />)
        }
        return (
            <div>
                <h1>Log in Page</h1>
                <Link to="/">Go Back Home</Link>

                <h2>Select a user to log in</h2>
                {
                    this.state.users.map((user) => {
                        return (
                            <Link
                                to={`/user/${user._id}`}
                                key={user._id}
                            >
                                {user.userName}
                            </Link>)
                    })
                }

                <h2>Sign Up</h2>
                <form onSubmit={this.handleSignUp}>
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={this.handleChange}
                        value={this.state.user.userName}
                    />

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                        />
                    </div>
                    <button>Sign Up</button>
                </form>

            </div>
        )
    }
}

export default LogInPage