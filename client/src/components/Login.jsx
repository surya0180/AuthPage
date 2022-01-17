import { Close, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from './auth-actions'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alerts, setAlerts] = useState([])
    const navigate = useNavigate()

    const formHandler = (event) => {
        event.preventDefault();
        login(email, password).then((response) => {
            if (response.status === 'failure') {
                setAlerts(response.payload)
                localStorage.removeItem('token')
                localStorage.setItem('isAuthenticated', false)
            }
            if (response.status === 'success') {
                console.log(response.payload)
                localStorage.setItem('token', response.payload.token)
                localStorage.setItem('isAuthenticated', true)
                setEmail("")
                setPassword("")
                navigate('/profile', {replace: true})
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <div className='container' style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '10px',
        }}>
            <h2>Login</h2>
            {alerts.length !== 0 &&
                alerts.map((err, i) => {
                    return <div key={i} className="container d-flex justify-content-between align-items-center" style={{ backgroundColor: 'red', textAlign: 'start', color: 'white', padding: '0.4em 0.7em', margin: '0.7em 0', borderRadius: '5px' }}>
                        {err.msg}
                        <IconButton onClick={() => {
                            setAlerts((prevState) => prevState.filter(obj => obj.param !== err.param))
                        }}>
                            <Close sx={{ color: 'white' }} />
                        </IconButton>
                    </div>
                })
            }
            <form onSubmit={formHandler}>
                <TextField id="email" label="Email" variant="outlined" sx={{ width: '100%', margin: '1em 0' }}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    value={email}
                    required
                />
                <TextField id="password" label="Password" variant="outlined" sx={{ width: '100%', margin: '1em 0' }}
                    onChange={(event) => setPassword(event.target.value)}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button variant="contained" type='submit'>Login</Button>
                <p style={{ margin: '1em' }}>New to the website ? <Link to="/signup">Signup</Link> here </p>
            </form>
        </div>
    )
}

export default Login
