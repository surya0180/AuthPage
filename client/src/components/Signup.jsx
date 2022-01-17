import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MuiPhoneNumber from 'material-ui-phone-number';

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
    const formHandler = (event) => {
        event.preventDefault();
        if(error) {
            return
        }
        console.log(data)
        setData(initData)
    }
    return (
        <div className='container' style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '10px',
            width: '60%',
        }}>
            <h2>Signup</h2>
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
                    type="password"
                    value={data.password}
                    required
                />
                <TextField id="confpassword" label="Confirm Password" variant="outlined" sx={{ width: '100%', margin: '0.7em 0' }}
                    onChange={(event) => {
                        console.log("I am here")
                        setError(event.target.value !== data.password)
                    }}
                    type="password"
                    required
                    error={error}
                />
                <Button variant="contained" type='submit'>Register</Button>
                <p style={{ margin: '1em' }}>Already have an account ? <Link to="/login">login</Link> here </p>
            </form>
        </div>
    )
}

export default Signup
