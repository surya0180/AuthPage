import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center' style={{
            height: '100vh',
            textAlign: 'center'
        }}>
            <div>
                <h1>Welcome to the site!</h1> <br />
                <Outlet />
            </div>
        </div>
    )
}

export default Home
