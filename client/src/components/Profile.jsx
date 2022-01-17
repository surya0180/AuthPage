import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { user } from './auth-actions'
import styles from './Style.module.css'
import {useNavigate} from 'react-router-dom'


const Profile = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        user().then((response) => {
            if (response.status === 'success') {
                setLoading(false)
                setData(response.payload)
            }
            if (response.status === 'failure') {
                setLoading(false)
                setData({})
            }
        })
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('token')
        navigate('/login', {replace: 'true'})
    }
    return (
        <div className='container' style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '10px',
            width: '60%',
        }}>
            <h2>Profile</h2>
            {loading ? <div className='container-fluid d-flex justify-content-center align-items-center'>
                <CircularProgress />
            </div> : <div className={"row " + styles.profile}>
                <div className="col-md-6 col-sm-6">
                    <b>Firstname</b>
                    <div className={styles.field}>
                        {data.firstname}
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Lastname</b>
                    <div className={styles.field}>
                        {data.lastname}
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Email</b>
                    <div className={styles.field}>
                        {data.email}
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <b>Phone</b>
                    <div className={styles.field}>
                        {data.phone}
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <b>Address</b>
                    <div className={styles.field}>
                        {data.address}
                    </div>
                </div>
            </div>}
            <button className='btn btn-primary' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Profile
