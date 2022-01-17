import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MuiPhoneNumber from 'material-ui-phone-number';
import { Close, Visibility, VisibilityOff } from '@mui/icons-material';
import { register } from './auth-actions';

const Signup = () => {
    const initData = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password: '',
    }
    const [data, setData] = useState(initData)
    const [error, setError] = useState(false)
    const [alerts, setAlerts] = useState([])
    const navigate = useNavigate()

    const formHandler = async (event) => {
        event.preventDefault();
        if (error) {
            return
        }
        register(data).then((response) => {
            if (response.status === 'failure') {
                setAlerts(response.payload)
                localStorage.removeItem('token')
                localStorage.setItem('isAuthenticated', false)
            }
            if (response.status === 'success') {
                console.log(response.payload)
                localStorage.setItem('token', response.payload.token)
                localStorage.setItem('isAuthenticated', true)
                setData(initData)
                navigate('/profile', { replace: true })
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
            width: '60%',
        }}>
            <h2>Signup</h2>
            {console.log(alerts.length)}
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
                <div className="row">
                    <div className="col-md-6"><TextField id="fn" label="Firstname" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                        onChange={(event) => setData((prevState) => {
                            return {
                                ...prevState,
                                firstname: event.target.value
                            }
                        })}
                        type="text"
                        value={data.firstname}
                        required
                    /></div>
                    <div className="col-md-6"><TextField id="ln" label="Lastname" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                        onChange={(event) => setData((prevState) => {
                            return {
                                ...prevState,
                                lastname: event.target.value
                            }
                        })}
                        type="text"
                        value={data.lastname}
                        required
                    /></div>
                </div>
                <TextField id="email" label="Email" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                    onChange={(event) => setData((prevState) => {
                        return {
                            ...prevState,
                            email: event.target.value
                        }
                    })}
                    type="email"
                    value={data.email}
                    required
                />
                <MuiPhoneNumber defaultCountry={'in'} onChange={(value) => setData((prevState) => {
                    return {
                        ...prevState,
                        phone: value
                    }
                })}
                    sx={{ width: '100%', margin: '0.7em 0' }}
                    value={data.phone}
                    required
                />
                <TextField id="address" label="Address" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                    onChange={(event) => setData((prevState) => {
                        return {
                            ...prevState,
                            address: event.target.value
                        }
                    })}
                    multiline
                    rows={2}
                    type="email"
                    value={data.address}
                    required
                />
                <TextField id="password" label="Password" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                    onChange={(event) => setData((prevState) => {
                        return {
                            ...prevState,
                            password: event.target.value
                        }
                    })}
                    type={showPassword ? "text" : "password"}
                    value={data.password}
                    required
                />
                <TextField id="confpassword" label="Confirm Password" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                    onChange={(event) => {
                        console.log("I am here")
                        setError(event.target.value !== data.password)
                    }}
                    type={showPassword ? "text" : "password"}
                    required
                    error={error}
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
                />
                <Button variant="contained" type='submit'>Register</Button>
                <p style={{ margin: '1em' }}>Already have an account ? <Link to="/login">login</Link> here </p>
            </form>
        </div>
    )
}

export default Signup
