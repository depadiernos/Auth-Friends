import React, { useState } from "react";

export default function Login(props){
    const [credentials, setCredentials] = useState()

    const handleChange = e => setCredentials({...credentials,[e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        props.handleLogin(credentials)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>

        </form>
    )

}