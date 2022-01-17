import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const formHandler = (event) => {
        event.preventDefault();
        console.log(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='container' style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '10px',
        }}>
            <h2>Login</h2>
            <form onSubmit={formHandler}>
                <TextField id="email" label="Email" variant="outlined" sx={{ width: '100%', margin: '1em 0' }} 
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    value={email}
                    required
                />
                <TextField id="password" label="Password" variant="outlined" sx={{ width: '100%', margin: '1em 0' }} 
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    value={password}
                    required
                />
                <Button variant="contained" type='submit'>Login</Button>
                <p style={{margin: '1em'}}>New to the website ? <Link to="/signup">Signup</Link> here </p>
            </form>
        </div>
    )
}

export default Login
