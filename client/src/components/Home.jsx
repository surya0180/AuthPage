import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={(navdata) => {
                                    return navdata.isActive ? "nav-link active" : "nav-link"
                                }} aria-current="page" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(navdata) => {
                                    return navdata.isActive ? "nav-link active" : "nav-link"
                                }} to="/signup">Register</NavLink>
                            </li>
                            {isAuthenticated && <li className="nav-item">
                                <NavLink className={(navdata) => {
                                    return navdata.isActive ? "nav-link active" : "nav-link"
                                }} to="/profile">Profile</NavLink>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='container-fluid d-flex align-items-center justify-content-center' style={{
                height: '90vh',
                textAlign: 'center'
            }}>
                <div>
                    <h1>Welcome to the site!</h1>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
